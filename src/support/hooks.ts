import { Before, After,setDefaultTimeout, AfterAll } from '@cucumber/cucumber';
import { CustomWorld } from './world';
setDefaultTimeout(8*1000);

Before(async function (this: CustomWorld) {
  await this.init();
});

After(async function (this: CustomWorld) {
  await this.close();
});
