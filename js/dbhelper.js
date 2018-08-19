/**
 * Common database helper functions.
 */
class DBHelper {

  /**
   * Database URL.
   * Change this to restaurants.json file location on your server.
   */
  static get DATABASE_URL() {
    const port = 1337; // Change this to your server port
    return `http://localhost:${port}/restaurants/`;
  }

  //open the idb database
    static openIDB() {
    // If the browser doesn't support service worker, then there isn't a point to having a databse
    if (!navigator.serviceWorker) {
      return Promise.resolve();
    }
    //create database restaurant-reviews, version, and stand up the Database
    var dbPromise = idb.open('restaurant-reviews', 1, function (upgradeDb) {
      console.log('made new object store');
      //create restaurants database that are arranged by the id of the data set
      upgradeDb.createObjectStore('restaurants', { keyPath: 'id'});
      //create an index that the store can be sorted by and used to query on. In the UI we use neighborhood and cuisine
      restStore.createIndex('neighborhood', 'neighborhood');
      restStore.createIndex('cuisine', 'cuisine_type');
    });
  }

  static addRest() {

    dbPromise.then(function(db) {
      var tx = db.transaction('restaurants', 'readwrite');
      var store = tx.objectStore('restaurants');
      var item = {
        name: "Mission Chinese Food",
        neighborhood: "Manhattan",
        photograph: "1",
        address: "171 E Broadway, New York, NY 10002",
        id: 1
      };
      store.add(item);
      Returned tx.complete;
    }).then(function(){
      console.log('added item to store');
    });

    /*
    DBHelper.openIDB().then(db => {
      if (!db) return;
      //console.log('reached this point');
      fetch(DBHelper.DATABASE_URL)
      .then(response => response.json()).then(restaurants =>  {
          const tx = db.transaction('restaurants', 'readwrite');
          const store = tx.objectStore('restaurants');
          //console.log('reached this point');
          restaurants.forEach(resturant => {
            console.log('resturant data created');
            store.put(resturant);
          });
        });
    });
    */
  }

  //get all the resturant data the Database
  static getRest() {
    return DBHelper.openIDB().then(db => {
      return db.transaction('restaurants').objectStore('restaurants').getAll();
      console.log('retrieved rest data');
    })
    .catch((error => consol.log(`ERR fetching Resturants: ${error}`)));
  }




  /**
   * Fetch all restaurants from the JSON file that is served at the port
   */
   static fetchRestaurants(callback) {
     console.log('Fetching restaurants from the network');
     //fetch from the api
     fetch(DBHelper.DATABASE_URL).then(response => response.json()).then(restaurants =>callback(null, restaurants));
   }


/**
  static fetchRestaurants(callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', DBHelper.DATABASE_URL);
    xhr.onload = () => {
      if (xhr.status === 200) { // Got a success response from server!
        const json = JSON.parse(xhr.responseText);
        const restaurants = json.restaurants;
        callback(null, restaurants);
      } else { // Oops!. Got an error from server.
        const error = (`Request failed. Returned status of ${xhr.status}`);
        callback(error, null);
      }
    };
    xhr.send();
  }*/

  /**
   * Fetch a restaurant by its ID.
   */
  static fetchRestaurantById(id, callback) {
    // fetch all restaurants with proper error handling.
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        const restaurant = restaurants.find(r => r.id == id);
        if (restaurant) { // Got the restaurant
          callback(null, restaurant);
        } else { // Restaurant does not exist in the database
          callback('Restaurant does not exist', null);
        }
      }
    });
  }

  /**
   * Fetch restaurants by a cuisine type with proper error handling.
   */
 /**
  static fetchRestaurantByCuisine(cuisine, callback) {
    // Fetch all restaurants  with proper error handling
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        // Filter restaurants to have only given cuisine type
        const results = restaurants.filter(r => r.cuisine_type == cuisine);
        callback(null, results);
      }
    });
  }
*/
  /**
   * Fetch restaurants by a neighborhood with proper error handling.
   */
   /**
  static fetchRestaurantByNeighborhood(neighborhood, callback) {
    // Fetch all restaurants
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        // Filter restaurants to have only given neighborhood
        const results = restaurants.filter(r => r.neighborhood == neighborhood);
        callback(null, results);
      }
    });
  }
  */

  /**
   * Fetch restaurants by a cuisine and a neighborhood with proper error handling.
   */
  static fetchRestaurantByCuisineAndNeighborhood(cuisine, neighborhood, callback) {
    // Fetch all restaurants
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        let results = restaurants
        if (cuisine != 'all') { // filter by cuisine
          results = results.filter(r => r.cuisine_type == cuisine);
        }
        if (neighborhood != 'all') { // filter by neighborhood
          results = results.filter(r => r.neighborhood == neighborhood);
        }
        callback(null, results);
      }
    });
  }

  /**
   * Fetch all neighborhoods with proper error handling.
   */

  static fetchNeighborhoods(callback) {
    // Fetch all restaurants
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        // Get all neighborhoods from all restaurants
        const neighborhoods = restaurants.map((v, i) => restaurants[i].neighborhood)
        // Remove duplicates from neighborhoods
        const uniqueNeighborhoods = neighborhoods.filter((v, i) => neighborhoods.indexOf(v) == i)
        callback(null, uniqueNeighborhoods);
      }
    });
  }

  /**
   * Fetch all cuisines with proper error handling.
   */

  static fetchCuisines(callback) {
    // Fetch all restaurants
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        // Get all cuisines from all restaurants
        const cuisines = restaurants.map((v, i) => restaurants[i].cuisine_type)
        // Remove duplicates from cuisines
        const uniqueCuisines = cuisines.filter((v, i) => cuisines.indexOf(v) == i)
        callback(null, uniqueCuisines);
      }
    });
  }

  /**
   * Restaurant page URL.
   */
  static urlForRestaurant(restaurant) {
    return (`./restaurant.html?id=${restaurant.id}`);
  }

  /**
   * Restaurant image URL.
   */
  static imageUrlForRestaurant(restaurant) {
    return (`/img/${restaurant.photograph}`);
  }

  /**
   * Map marker for a restaurant.
   */
  static mapMarkerForRestaurant(restaurant, map) {
    const marker = new google.maps.Marker({
      position: restaurant.latlng,
      title: restaurant.name,
      url: DBHelper.urlForRestaurant(restaurant),
      map: map,
      animation: google.maps.Animation.DROP}
    );
    return marker;
  }

}
//actually creates the database and opens it. Without this you are neevr calling the database to ever do it's thing!
const dbPromise = DBHelper.addRest();
//Check if browser supports service worker. If so regsiter it!
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful within scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
