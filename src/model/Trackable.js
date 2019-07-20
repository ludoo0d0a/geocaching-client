/**
 * Geocaching API v1.0
 * Geocaching API version 1.0.
 *
 * OpenAPI spec version: v1
 * Contact: apihelp@geocaching.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.6
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Image', 'model/TrackableLog', 'model/TrackableType', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Image'), require('./TrackableLog'), require('./TrackableType'), require('./User'));
  } else {
    // Browser globals (root is window)
    if (!root.GeocachingApiV10) {
      root.GeocachingApiV10 = {};
    }
    root.GeocachingApiV10.Trackable = factory(root.GeocachingApiV10.ApiClient, root.GeocachingApiV10.Image, root.GeocachingApiV10.TrackableLog, root.GeocachingApiV10.TrackableType, root.GeocachingApiV10.User);
  }
}(this, function(ApiClient, Image, TrackableLog, TrackableType, User) {
  'use strict';




  /**
   * The Trackable model module.
   * @module model/Trackable
   * @version v1
   */

  /**
   * Constructs a new <code>Trackable</code>.
   * @alias module:model/Trackable
   * @class
   */
  var exports = function() {
    var _this = this;
























  };

  /**
   * Constructs a <code>Trackable</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Trackable} obj Optional instance to populate.
   * @return {module:model/Trackable} The populated <code>Trackable</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('referenceCode')) {
        obj['referenceCode'] = ApiClient.convertToType(data['referenceCode'], 'String');
      }
      if (data.hasOwnProperty('iconUrl')) {
        obj['iconUrl'] = ApiClient.convertToType(data['iconUrl'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('goal')) {
        obj['goal'] = ApiClient.convertToType(data['goal'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('releasedDate')) {
        obj['releasedDate'] = ApiClient.convertToType(data['releasedDate'], 'String');
      }
      if (data.hasOwnProperty('originCountry')) {
        obj['originCountry'] = ApiClient.convertToType(data['originCountry'], 'String');
      }
      if (data.hasOwnProperty('allowedToBeCollected')) {
        obj['allowedToBeCollected'] = ApiClient.convertToType(data['allowedToBeCollected'], 'Boolean');
      }
      if (data.hasOwnProperty('ownerCode')) {
        obj['ownerCode'] = ApiClient.convertToType(data['ownerCode'], 'String');
      }
      if (data.hasOwnProperty('owner')) {
        obj['owner'] = User.constructFromObject(data['owner']);
      }
      if (data.hasOwnProperty('holderCode')) {
        obj['holderCode'] = ApiClient.convertToType(data['holderCode'], 'String');
      }
      if (data.hasOwnProperty('holder')) {
        obj['holder'] = User.constructFromObject(data['holder']);
      }
      if (data.hasOwnProperty('inHolderCollection')) {
        obj['inHolderCollection'] = ApiClient.convertToType(data['inHolderCollection'], 'Boolean');
      }
      if (data.hasOwnProperty('currentGeocacheCode')) {
        obj['currentGeocacheCode'] = ApiClient.convertToType(data['currentGeocacheCode'], 'String');
      }
      if (data.hasOwnProperty('isMissing')) {
        obj['isMissing'] = ApiClient.convertToType(data['isMissing'], 'Boolean');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('trackableType')) {
        obj['trackableType'] = TrackableType.constructFromObject(data['trackableType']);
      }
      if (data.hasOwnProperty('imageCount')) {
        obj['imageCount'] = ApiClient.convertToType(data['imageCount'], 'Number');
      }
      if (data.hasOwnProperty('trackingNumber')) {
        obj['trackingNumber'] = ApiClient.convertToType(data['trackingNumber'], 'String');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('currentGeocacheName')) {
        obj['currentGeocacheName'] = ApiClient.convertToType(data['currentGeocacheName'], 'String');
      }
      if (data.hasOwnProperty('trackableLogs')) {
        obj['trackableLogs'] = ApiClient.convertToType(data['trackableLogs'], [TrackableLog]);
      }
      if (data.hasOwnProperty('images')) {
        obj['images'] = ApiClient.convertToType(data['images'], [Image]);
      }
    }
    return obj;
  }

  /**
   * @member {String} referenceCode
   */
  exports.prototype['referenceCode'] = undefined;
  /**
   * @member {String} iconUrl
   */
  exports.prototype['iconUrl'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} goal
   */
  exports.prototype['goal'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {String} releasedDate
   */
  exports.prototype['releasedDate'] = undefined;
  /**
   * @member {String} originCountry
   */
  exports.prototype['originCountry'] = undefined;
  /**
   * @member {Boolean} allowedToBeCollected
   */
  exports.prototype['allowedToBeCollected'] = undefined;
  /**
   * @member {String} ownerCode
   */
  exports.prototype['ownerCode'] = undefined;
  /**
   * @member {module:model/User} owner
   */
  exports.prototype['owner'] = undefined;
  /**
   * @member {String} holderCode
   */
  exports.prototype['holderCode'] = undefined;
  /**
   * @member {module:model/User} holder
   */
  exports.prototype['holder'] = undefined;
  /**
   * @member {Boolean} inHolderCollection
   */
  exports.prototype['inHolderCollection'] = undefined;
  /**
   * @member {String} currentGeocacheCode
   */
  exports.prototype['currentGeocacheCode'] = undefined;
  /**
   * @member {Boolean} isMissing
   */
  exports.prototype['isMissing'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {module:model/TrackableType} trackableType
   */
  exports.prototype['trackableType'] = undefined;
  /**
   * @member {Number} imageCount
   */
  exports.prototype['imageCount'] = undefined;
  /**
   * @member {String} trackingNumber
   */
  exports.prototype['trackingNumber'] = undefined;
  /**
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * @member {String} currentGeocacheName
   */
  exports.prototype['currentGeocacheName'] = undefined;
  /**
   * @member {Array.<module:model/TrackableLog>} trackableLogs
   */
  exports.prototype['trackableLogs'] = undefined;
  /**
   * @member {Array.<module:model/Image>} images
   */
  exports.prototype['images'] = undefined;



  return exports;
}));


