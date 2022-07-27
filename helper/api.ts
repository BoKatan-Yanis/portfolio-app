import PocketBase from "@pocketbase";

const client = new PocketBase("http://localhost:8090");

// Create One
async function createOne(collectionIdOrName: string, data: object) {
    client.Records.create(collectionIdOrName, data, { "$autoCancel": false })
        .then(function (record) {
            return record;
        }).catch(function (error) {
            throw new Error(error);
        });
}
// Delete One
async function deleteOne(collectionIdOrName: string, id: number, data: object) {
    client.Records.delete(collectionIdOrName, id, data, { "$autoCancel": false })
        .then(function (record) {
            return record;
        }).catch(function (error) {
            throw new Error(error);
        });
}
// Update One
async function updateOne(collectionIdOrName: string, id: number, data: object) {
    client.Records.update(collectionIdOrName, id, data, { "$autoCancel": false })
        .then(function (record) {
            return record;
        }).catch(function (error) {
            throw new Error(error);
        });
}

// get Full List
async function getFullList(
    collectionIdOrName: string,
    perPage: number = 30,
    callback?: any,
) {
    let records = client.Records.getFullList(
        collectionIdOrName,
        3, /* batch size */
    );
    return records.then(function (record: any) {
        // callback
        return record;
    })
        .catch(function (error: any) {
            throw new Error(error);
        });
}

// Merge local collection with the distant collection (update/insert/delete)
async function mergeData(
    collectionIdOrName: string,
    array2: Array<Object>,
    callback?: any,
) {
    const records = await getFullList(collectionIdOrName, 50, (res) => {
        return res;
    });
    const result = _getDelta(records, array2, _isEqual);
    console.log(Object.keys(records).length, Object.keys(array2).length);
    result?.deleted.map(async (d) => {
        console.log(d);
        if (d["@collectionName"] !== collectionIdOrName) {
            throw new Error("Delete Sync error");
        }
        let data = await deleteOne(d["@collectionName"], d.id, d).then(
            async (res) => {
                // console.log(res)
                return res;
            },
        );
        return data;
    });
    result?.changed.map(async (u) => {
        console.log(u);
        if (u["@collectionName"] !== collectionIdOrName) {
            throw new Error("Update Sync error");
        }
        let data = await updateOne(u["@collectionName"], u.id, u).then(
            async (res) => {
                // console.log(res)
                return res;
            },
        );
        return data;
    });
    result?.added.map(async (i) => {
        console.log(i);
        if (i["@collectionName"] !== collectionIdOrName) {
            throw new Error(" Added Sync error");
        }

        let data = await createOne(i["@collectionName"], i).then(async (res) => {
            // console.log(res)
            return res;
        });
        return data;
    });
}

// internal fuctions used for calculations
function _mapFromArray(array, prop) {
    var map = {};
    for (var i = 0; i < array.length; i++) {
        map[array[i][prop]] = array[i];
    }
    return map;
}

function _isEqual(a, b) {
    // return a.title === b.title && a.type === b.type;
    return a.id === b.id && a["@collectionName"] === b["@collectionName"];
}

function _getDelta(o: Array<Object>, n: Array<Object>, comparator: any): any {
    var delta = {
        added: [],
        deleted: [],
        changed: [],
    };
    var mapO = _mapFromArray(o, "id");
    var mapN = _mapFromArray(n, "id");
    for (var id in mapO) {
        if (!mapN.hasOwnProperty(id)) {
            delta.deleted.push(mapO[id]);
        } else if (!comparator(mapN[id], mapO[id])) {
            delta.changed.push(mapN[id]);
        }
    }

    for (var id in mapN) {
        if (!mapO.hasOwnProperty(id)) {
            delta.added.push(mapN[id]);
        }
    }
    return delta;
}

export { createOne, getFullList, mergeData };
