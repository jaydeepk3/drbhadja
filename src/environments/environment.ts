// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl:'http://www.drbhadjashomeopathy.com/API/'
};

export const apiPath = {
  api_genrate_token : environment.apiUrl + 'api_genrate_token.php',
  api_get_rate_review : environment.apiUrl + 'api_get_rate_review.php',
  api_add_rate_review : environment.apiUrl + 'api_add_rate_review.php',
  api_appointment : environment.apiUrl + 'api_appointment.php',
  api_subscribe : environment.apiUrl + 'api_subscribe.php',
  api_contact_us : environment.apiUrl + 'api_contact_us.php',
  api_static : environment.apiUrl + 'api_static.php',
  api_dieses : environment.apiUrl +'api_dieses',
  api_banner: environment.apiUrl +'api_banner'
}
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
