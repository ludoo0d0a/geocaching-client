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
    instance = new GeocachingApiV10.GeocacheLogsApi();
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

  describe('GeocacheLogsApi', function() {
    describe('geocacheLogsAddImage', function() {
      it('should call geocacheLogsAddImage successfully', function(done) {
        //uncomment below and update the code to test geocacheLogsAddImage
        //instance.geocacheLogsAddImage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('geocacheLogsCreateGeocacheLog', function() {
      it('should call geocacheLogsCreateGeocacheLog successfully', function(done) {
        //uncomment below and update the code to test geocacheLogsCreateGeocacheLog
        //instance.geocacheLogsCreateGeocacheLog(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('geocacheLogsDeleteGeocacheLog', function() {
      it('should call geocacheLogsDeleteGeocacheLog successfully', function(done) {
        //uncomment below and update the code to test geocacheLogsDeleteGeocacheLog
        //instance.geocacheLogsDeleteGeocacheLog(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('geocacheLogsDeleteGeocacheLogImages', function() {
      it('should call geocacheLogsDeleteGeocacheLogImages successfully', function(done) {
        //uncomment below and update the code to test geocacheLogsDeleteGeocacheLogImages
        //instance.geocacheLogsDeleteGeocacheLogImages(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('geocacheLogsGetGeocacheLog', function() {
      it('should call geocacheLogsGetGeocacheLog successfully', function(done) {
        //uncomment below and update the code to test geocacheLogsGetGeocacheLog
        //instance.geocacheLogsGetGeocacheLog(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('geocacheLogsGetImages', function() {
      it('should call geocacheLogsGetImages successfully', function(done) {
        //uncomment below and update the code to test geocacheLogsGetImages
        //instance.geocacheLogsGetImages(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('geocacheLogsUpdateGeocacheLog', function() {
      it('should call geocacheLogsUpdateGeocacheLog successfully', function(done) {
        //uncomment below and update the code to test geocacheLogsUpdateGeocacheLog
        //instance.geocacheLogsUpdateGeocacheLog(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
