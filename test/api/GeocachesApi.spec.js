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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.GeocachingApiV10);
  }
}(this, function(expect, GeocachingApiV10) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new GeocachingApiV10.GeocachesApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('GeocachesApi', function() {
    describe('geocachesGetFavoritedBy', function() {
      it('should call geocachesGetFavoritedBy successfully', function(done) {
        //uncomment below and update the code to test geocachesGetFavoritedBy
        //instance.geocachesGetFavoritedBy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('geocachesGetGeocache', function() {
      it('should call geocachesGetGeocache successfully', function(done) {
        //uncomment below and update the code to test geocachesGetGeocache
        //instance.geocachesGetGeocache(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('geocachesGetGeocaches', function() {
      it('should call geocachesGetGeocaches successfully', function(done) {
        //uncomment below and update the code to test geocachesGetGeocaches
        //instance.geocachesGetGeocaches(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('geocachesGetImages', function() {
      it('should call geocachesGetImages successfully', function(done) {
        //uncomment below and update the code to test geocachesGetImages
        //instance.geocachesGetImages(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('geocachesGetLogs', function() {
      it('should call geocachesGetLogs successfully', function(done) {
        //uncomment below and update the code to test geocachesGetLogs
        //instance.geocachesGetLogs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('geocachesGetTrackables', function() {
      it('should call geocachesGetTrackables successfully', function(done) {
        //uncomment below and update the code to test geocachesGetTrackables
        //instance.geocachesGetTrackables(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('geocachesSearch', function() {
      it('should call geocachesSearch successfully', function(done) {
        //uncomment below and update the code to test geocachesSearch
        //instance.geocachesSearch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
