import { loadCarPage } from "./carPageService.js";
import { loadCars } from "./carService.js";
import { swRegistration } from "./swRegister.js";

window.pageEvents = {
  loadCarPage,
  loadCars,
};

loadCars();
swRegistration();