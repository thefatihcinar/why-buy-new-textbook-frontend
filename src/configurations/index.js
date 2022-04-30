/* Import Configurations */
import appConfigs from './applicationConfigurations';

class ConfigurationInjector {
    /* this class collects all the configurations and injects them into the application */

    #configurations = {};

    #loadConfigurationFiles(){
        /* this method will read all the configuration files and
          store them in the configurations object */
        
        /* Store those keys in the configurations object */

        Object.keys(appConfigs).forEach(key => {
            this.#configurations[key] = appConfigs[key];
        });

    }

    constructor() {
        /* read all the configuration files store them in an object */
        this.#loadConfigurationFiles();
    }

    getConfig(key) {
        /* when a key is provided, this method finds the necessary configuration in all of the different configuration files */
        return this.#configurations[key];
    }
}

export default new ConfigurationInjector();
