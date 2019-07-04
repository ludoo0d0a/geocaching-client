import http, {utils} from '../utils/http';
import {HttpClient, APIConfiguration, List} from '../utils/types';

/*
 List of interfaces from request parameters
*/

export interface GetUser {
  // [path] the identifier of the user. Can also use me to fetch the calling user&#39;s information default:- ex:PR18
  referenceCode: string;
  // [query] partial response fields to return default:referenceCode ex:fields=username,referenceCode
  fields?: string; 
}

export interface GetUsers {
  // [query] the identifiers of the users. The max amount of codes allowed is 50. default:- ex:referenceCodes=PR1,PR2,PR3
  referenceCodes?: string;
  // [query] the username of the users. The max amount of usernames allowed is 50. default:- ex:usernames=test1,test2
  usernames?: string;
  // [query] partial response fields to return default:referenceCode ex:fields=username,referenceCode
  fields?: string; 
}

export interface GetUserLogs {
  // [path] the identifier of the user. Can also use me to fetch the calling user&#39;s information default:- ex:PR18
  referenceCode: string;
  // [query] partial response fields to return default:referenceCode ex:fields=name,referenceCode
  fields?: string;
  // [query] The fields of the geocache log object to expand. The available option is images. default:- ex:expand=images:5
  expand?: string;
  // [query] includes archived logs in the results (see restrictions) default:false ex:includeArchived=false
  includeArchived?: string;
  // [query] the log types to include in the results (see restrictions) default:all types ex:logTypes=2,10,11
  logTypes?: string;
  // [query] filters results to loggedDates after this date (inclusive) default:all dates included ex:afterDate=2018-01-01
  afterDate?: string;
  // [query] filters results to loggedDates before this date (inclusive) default:all dates included ex:beforeDate=2018-01-01
  beforeDate?: string;
  // [query] the number of resources to skip over default:0 ex:skip=10
  skip?: string;
  // [query] how many resources to return. maximum value of 50 default:10 ex:take=0
  take?: string; 
}

export interface GetLists {
  // [path] the identifier of the user. Can also use me to fetch the calling user&#39;s information default:- ex:PR18
  referenceCode: string;
  // [query] the type of lists to return. options are fl (favorites list), wl (watch list), il (ignore list), bm (bookmark list), pq (pocket query) default:bm ex:types=bm,wl
  types?: string;
  // [query] partial response fields to return default:referenceCode ex:fields=name,referenceCode
  fields?: string;
  // [query] the number of resources to skip over default:0 ex:skip=10
  skip?: string;
  // [query] how many resources to return. maximum value of 50 default:10 ex:take=0
  take?: string; 
}

export interface GetSouvenirs {
  // [path] the identifier of the user. Can also use me to fetch the calling user&#39;s information default:- ex:PR18
  referenceCode: string;
  // [query] partial response fields to return default:title ex:fields=title
  fields?: string;
  // [query] the number of resources to skip over default:0 ex:skip=10
  skip?: string;
  // [query] how many resources to return. maximum value of 50 default:10 ex:take=0
  take?: string; 
}

export interface GetUserImages {
  // [path] the identifier of the user. Can also use me to fetch the calling user&#39;s information default:- ex:PR18
  referenceCode: string;
  // [query] partial response fields to return default:url ex:fields=name,referenceCode
  fields?: string;
  // [query] the number of resources to skip over default:0 ex:skip=10
  skip?: string;
  // [query] how many resources to return. maximum value of 50 default:10 ex:take=0
  take?: string; 
}

export interface GetGeocacheFavoritedby {
  // [path] the identifier of the geocache default:- ex:GCK25B
  referenceCode: string;
  // [query] partial response fields to return default:referenceCode ex:fields=username,referenceCode
  fields?: string;
  // [query] the number of resources to skip over default:0 ex:skip=10
  skip?: string;
  // [query] how many resources to return. maximum value of 50 default:10 ex:take=0
  take?: string; 
}


/*
* Returned api userMethodsApi
*/
export const userMethodsApi = (configuration: APIConfiguration, httpClient: HttpClient): UserMethodsApi => {
    const {get, post, delete_} = httpClient;

    
    /**
    * Get User
    * This method will fetch the information about the user.
    *
    * @path: /v1/users/{referenceCode}
    * @method: get
    * @link https://api.groundspeak.com/documentation#get-user
    * @access public
    * @param referenceCode (path) [required] the identifier of the user. Can also use me to fetch the calling user&#39;s information - (PR18)
* @param fields (query)  partial response fields to return referenceCode (fields=username,referenceCode)
        * @return user 
    * @responseCodes 200, 400, 401, 403, 404, 429, 500
    * @restrictions Users may opt out of sharing personal data. See
    */
    const getUser = (params: GetUser, cb): user => {
        
        // check required params
        
        if (!array_key_exists('referenceCode', params)) {
                throw new Exception('referenceCode is missing.');
        }
        
        return this.getRequest('/v1/users/{referenceCode}', params, cb);
    };
    
    /**
    * Get Users
    * This method will fetch the information about the specified users.
    *
    * @path: /v1/users
    * @method: get
    * @link https://api.groundspeak.com/documentation#get-users
    * @access public
    * @param referenceCodes (query)  the identifiers of the users. The max amount of codes allowed is 50. - (referenceCodes=PR1,PR2,PR3)
* @param usernames (query)  the username of the users. The max amount of usernames allowed is 50. - (usernames=test1,test2)
* @param fields (query)  partial response fields to return referenceCode (fields=username,referenceCode)
        * @return user[] 
    * @responseCodes 200, 400, 401, 404, 500
    * @restrictions Only referenceCodes will be respected if both are passed in. Users may opt out of sharing personal data. See
    */
    const getUsers = (params: GetUsers, cb): user[] => {
        
        return this.getRequest('/v1/users', params, cb);
    };
    
    /**
    * Get User Geocache Logs
    * This method will fetch the geocache logs for the user.
    *
    * @path: /v1/users/{referenceCode}/geocachelogs
    * @method: get
    * @link https://api.groundspeak.com/documentation#get-user-logs
    * @access public
    * @param referenceCode (path) [required] the identifier of the user. Can also use me to fetch the calling user&#39;s information - (PR18)
* @param fields (query)  partial response fields to return referenceCode (fields=name,referenceCode)
* @param expand (query)  The fields of the geocache log object to expand. The available option is images. - (expand=images:5)
* @param includeArchived (query)  includes archived logs in the results (see restrictions) false (includeArchived=false)
* @param logTypes (query)  the log types to include in the results (see restrictions) all types (logTypes=2,10,11)
* @param afterDate (query)  filters results to loggedDates after this date (inclusive) all dates included (afterDate=2018-01-01)
* @param beforeDate (query)  filters results to loggedDates before this date (inclusive) all dates included (beforeDate=2018-01-01)
* @param skip (query)  the number of resources to skip over 0 (skip=10)
* @param take (query)  how many resources to return. maximum value of 50 10 (take=0)
        * @return geocacheLog[] 
    * @responseCodes 200, 400, 401, 403, 404, 500
    * @restrictions Can only use includeArchived parameter for the calling user. Users may opt out of sharing personal data. See
    */
    const getUserLogs = (params: GetUserLogs, cb): geocacheLog[] => {
        
        // check required params
        
        if (!array_key_exists('referenceCode', params)) {
                throw new Exception('referenceCode is missing.');
        }
        
        return this.getRequest('/v1/users/{referenceCode}/geocachelogs', params, cb);
    };
    
    /**
    * Get User Lists
    * This method will fetch the lists for the user.
    *
    * @path: /v1/users/{referenceCode}/lists
    * @method: get
    * @link https://api.groundspeak.com/documentation#get-lists
    * @access public
    * @param referenceCode (path) [required] the identifier of the user. Can also use me to fetch the calling user&#39;s information - (PR18)
* @param types (query)  the type of lists to return. options are fl (favorites list), wl (watch list), il (ignore list), bm (bookmark list), pq (pocket query) bm (types=bm,wl)
* @param fields (query)  partial response fields to return referenceCode (fields=name,referenceCode)
* @param skip (query)  the number of resources to skip over 0 (skip=10)
* @param take (query)  how many resources to return. maximum value of 50 10 (take=0)
        * @return list[] 
    * @responseCodes 200, 400, 401, 403, 404, 500
    * @restrictions Basic members restriction applies. See
    */
    const getLists = (params: GetLists, cb): list[] => {
        
        // check required params
        
        if (!array_key_exists('referenceCode', params)) {
                throw new Exception('referenceCode is missing.');
        }
        
        return this.getRequest('/v1/users/{referenceCode}/lists', params, cb);
    };
    
    /**
    * Get User Souvenirs
    * This method will fetch the awarded souvenirs for the specified user.
    *
    * @path: /v1/users/{referenceCode}/souvenirs
    * @method: get
    * @link https://api.groundspeak.com/documentation#get-souvenirs
    * @access public
    * @param referenceCode (path) [required] the identifier of the user. Can also use me to fetch the calling user&#39;s information - (PR18)
* @param fields (query)  partial response fields to return title (fields=title)
* @param skip (query)  the number of resources to skip over 0 (skip=10)
* @param take (query)  how many resources to return. maximum value of 50 10 (take=0)
        * @return souvenir[] 
    * @responseCodes 200, 400, 401, 403, 404, 500
    * @restrictions Users may opt out of sharing personal data. See
    */
    const getSouvenirs = (params: GetSouvenirs, cb): souvenir[] => {
        
        // check required params
        
        if (!array_key_exists('referenceCode', params)) {
                throw new Exception('referenceCode is missing.');
        }
        
        return this.getRequest('/v1/users/{referenceCode}/souvenirs', params, cb);
    };
    
    /**
    * Get User Images
    * This method will fetch the images for the specified user.
    *
    * @path: /v1/users/{referenceCode}/images
    * @method: get
    * @link https://api.groundspeak.com/documentation#get-user-images
    * @access public
    * @param referenceCode (path) [required] the identifier of the user. Can also use me to fetch the calling user&#39;s information - (PR18)
* @param fields (query)  partial response fields to return url (fields=name,referenceCode)
* @param skip (query)  the number of resources to skip over 0 (skip=10)
* @param take (query)  how many resources to return. maximum value of 50 10 (take=0)
        * @return image[] 
    * @responseCodes 200, 400, 401, 403, 404, 500
    * @restrictions Users may opt out of sharing personal data. See
    */
    const getUserImages = (params: GetUserImages, cb): image[] => {
        
        // check required params
        
        if (!array_key_exists('referenceCode', params)) {
                throw new Exception('referenceCode is missing.');
        }
        
        return this.getRequest('/v1/users/{referenceCode}/images', params, cb);
    };
    
    /**
    * Get Favorited Users by Geocache
    * This method will fetch the users that have favorited the specified geocache.
    *
    * @path: /v1/geocaches/{referenceCode}/favoritedby
    * @method: get
    * @link https://api.groundspeak.com/documentation#get-geocache-favoritedby
    * @access public
    * @param referenceCode (path) [required] the identifier of the geocache - (GCK25B)
* @param fields (query)  partial response fields to return referenceCode (fields=username,referenceCode)
* @param skip (query)  the number of resources to skip over 0 (skip=10)
* @param take (query)  how many resources to return. maximum value of 50 10 (take=0)
        * @return user[] 
    * @responseCodes 200, 400, 401, 403, 404, 429, 500
    * @restrictions Users may opt out of sharing personal data. See
    */
    const getGeocacheFavoritedby = (params: GetGeocacheFavoritedby, cb): user[] => {
        
        // check required params
        
        if (!array_key_exists('referenceCode', params)) {
                throw new Exception('referenceCode is missing.');
        }
        
        return this.getRequest('/v1/geocaches/{referenceCode}/favoritedby', params, cb);
    };
    

    // Returns all methods in a single object API
    return {
        getUser,
        getUsers,
        getUserLogs,
        getLists,
        getSouvenirs,
        getUserImages,
        getGeocacheFavoritedby,
        
    };

}; //end export const


export default (configuration: APIConfiguration): UserMethodsApi => {
    return userMethodsApi(configuration, http);
};