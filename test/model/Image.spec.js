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
    define(['expect.js', '../../src/geocaching-api-v10'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/geocaching-api-v10'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.GeocachingApiV10);
  }
}(this, function(expect, GeocachingApiV10) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new GeocachingApiV10.Image();
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

  describe('Image', function() {
    it('should create an instance of Image', function() {
      // uncomment below and update the code to test Image
      //var instance = new GeocachingApiV10.Image();
      //expect(instance).to.be.a(GeocachingApiV10.Image);
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new GeocachingApiV10.Image();
      //expect(instance).to.be();
    });

    it('should have the property thumbnailUrl (base name: "thumbnailUrl")', function() {
      // uncomment below and update the code to test the property thumbnailUrl
      //var instance = new GeocachingApiV10.Image();
      //expect(instance).to.be();
    });

    it('should have the property largeUrl (base name: "largeUrl")', function() {
      // uncomment below and update the code to test the property largeUrl
      //var instance = new GeocachingApiV10.Image();
      //expect(instance).to.be();
    });

    it('should have the property referenceCode (base name: "referenceCode")', function() {
      // uncomment below and update the code to test the property referenceCode
      //var instance = new GeocachingApiV10.Image();
      //expect(instance).to.be();
    });

    it('should have the property createdDate (base name: "createdDate")', function() {
      // uncomment below and update the code to test the property createdDate
      //var instance = new GeocachingApiV10.Image();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new GeocachingApiV10.Image();
      //expect(instance).to.be();
    });

    it('should have the property guid (base name: "guid")', function() {
      // uncomment below and update the code to test the property guid
      //var instance = new GeocachingApiV10.Image();
      //expect(instance).to.be();
    });

  });

}));
