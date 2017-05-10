/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

const makeHashTable = () => {
  const result = {};
  const storage = [];

  let storageLimit = 4;
  let size = 0;

  result.insert = (key, value) => {
    // TODO: implement `insert`
    const index = getIndexBelowMaxForKey(key, storageLimit); //index that will be saved in storage
    storage[index] = storage[index] || [];
  };

  result.retrieve = () => {
    // TODO: implement `retrieve`
  };

  result.remove = () => {
    // TODO: implement `remove`
  };

  return result;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
const getIndexBelowMaxForKey = (str, max) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

module.exports = { makeHashTable };
