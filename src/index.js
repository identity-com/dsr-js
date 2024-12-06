const { schemaLoader } = require('@identity.com/credential-commons');
const ScopeRequest = require('./ScopeRequest');
const Resolver = require('./resolver/Resolver');
const { initServices } = require('./services');
/**
 * Entry Point for Civic Credential Commons
 * @returns {CredentialCommons}
 * @constructor
 */
function DsrResolver() {
  this.ScopeRequest = ScopeRequest;
  this.Resolver = Resolver;
  this.initServices = initServices;
  this.schemaLoader = schemaLoader;
  return this;
}

module.exports = new DsrResolver();
