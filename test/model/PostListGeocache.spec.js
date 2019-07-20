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
    instance = new GeocachingApiV10.PostListGeocache();
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

  describe('PostListGeocache', function() {
    it('should create an instance of PostListGeocache', function() {
      // uncomment below and update the code to test PostListGeocache
      //var instance = new GeocachingApiV10.PostListGeocache();
      //expect(instance).to.be.a(GeocachingApiV10.PostListGeocache);
    });

    it('should have the property referenceCode (base name: "referenceCode")', function() {
      // uncomment below and update the code to test the property referenceCode
      //var instance = new GeocachingApiV10.PostListGeocache();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new GeocachingApiV10.PostListGeocache();
      //expect(instance).to.be();
    });

  });

}));
