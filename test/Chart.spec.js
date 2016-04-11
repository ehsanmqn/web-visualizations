/***
 * Copyright 2016 Open mHealth
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

describe( "Chart", function () {

    describe( "Construction", function () {

        beforeEach( function () {
            this.lib = OMHWebVisualizations;
            this.configSettings = {};
            this.measureList = 'systolic_blood_pressure, diastolic_blood_pressure';
            this.element = document.createElement('div');
            this.element.appendChild( document.createElement('svg') );
            this.data = [
                {"header":{"id":"76125da1-919a-4a31-a97c-e61726071d11","creation_date_time":"2014-01-05T17:53:28Z","acquisition_provenance":{"source_name":"generator","source_creation_date_time":"2015-07-09T22:04:23.471+02:00","modality":"sensed"},"user_id":"some-user","schema_id":{"namespace":"omh","name":"blood-pressure","version":"1.0"}},"body":{"effective_time_frame":{"date_time":"2014-01-05T17:53:28Z"},"systolic_blood_pressure":{"unit":"mmHg","value":112.2770482852676},"diastolic_blood_pressure":{"unit":"mmHg","value":66.79275804662011}},"id":"76125da1-919a-4a31-a97c-e61726071d11"},
                {"header":{"id":"99dd0991-270a-4e75-8f13-1f79bdffc864","creation_date_time":"2014-01-06T08:36:09Z","acquisition_provenance":{"source_name":"generator","source_creation_date_time":"2015-07-09T22:04:23.471+02:00","modality":"sensed"},"user_id":"some-user","schema_id":{"namespace":"omh","name":"blood-pressure","version":"1.0"}},"body":{"effective_time_frame":{"date_time":"2014-01-06T08:36:09Z"},"systolic_blood_pressure":{"unit":"mmHg","value":104.9073423812299},"diastolic_blood_pressure":{"unit":"mmHg","value":64.85768123424086}},"id":"99dd0991-270a-4e75-8f13-1f79bdffc864"},
                {"header":{"id":"fc0fbf2e-1fe2-477b-9a95-b2b8739af66c","creation_date_time":"2014-01-09T00:11:22Z","acquisition_provenance":{"source_name":"generator","source_creation_date_time":"2015-07-09T22:04:23.471+02:00","modality":"sensed"},"user_id":"some-user","schema_id":{"namespace":"omh","name":"blood-pressure","version":"1.0"}},"body":{"effective_time_frame":{"date_time":"2014-01-09T00:11:22Z"},"systolic_blood_pressure":{"unit":"mmHg","value":104.09398090684078},"diastolic_blood_pressure":{"unit":"mmHg","value":69.55892151405669}},"id":"fc0fbf2e-1fe2-477b-9a95-b2b8739af66c"},
                {"header":{"id":"41e6f10c-082f-491f-9e07-a80364cdfad3","creation_date_time":"2014-01-09T08:30:31Z","acquisition_provenance":{"source_name":"generator","source_creation_date_time":"2015-07-09T22:04:23.471+02:00","modality":"sensed"},"user_id":"some-user","schema_id":{"namespace":"omh","name":"blood-pressure","version":"1.0"}},"body":{"effective_time_frame":{"date_time":"2014-01-09T08:30:31Z"},"systolic_blood_pressure":{"unit":"mmHg","value":107.51709301736724},"diastolic_blood_pressure":{"unit":"mmHg","value":63.3359638921884}},"id":"41e6f10c-082f-491f-9e07-a80364cdfad3"},
                {"header":{"id":"c29628a0-1f67-4c5e-8386-f2696d91760f","creation_date_time":"2014-01-09T20:13:25Z","acquisition_provenance":{"source_name":"generator","source_creation_date_time":"2015-07-09T22:04:23.471+02:00","modality":"sensed"},"user_id":"some-user","schema_id":{"namespace":"omh","name":"blood-pressure","version":"1.0"}},"body":{"effective_time_frame":{"date_time":"2014-01-09T20:13:25Z"},"systolic_blood_pressure":{"unit":"mmHg","value":109.04521847797011},"diastolic_blood_pressure":{"unit":"mmHg","value":70.66378021592104}},"id":"c29628a0-1f67-4c5e-8386-f2696d91760f"},
                {"header":{"id":"d5b46bc8-768c-4401-99bb-726c62e4da03","creation_date_time":"2014-01-10T04:23:00Z","acquisition_provenance":{"source_name":"generator","source_creation_date_time":"2015-07-09T22:04:23.471+02:00","modality":"sensed"},"user_id":"some-user","schema_id":{"namespace":"omh","name":"blood-pressure","version":"1.0"}},"body":{"effective_time_frame":{"date_time":"2014-01-10T04:23:00Z"},"systolic_blood_pressure":{"unit":"mmHg","value":107.54998271697566},"diastolic_blood_pressure":{"unit":"mmHg","value":76.65409719416861}},"id":"d5b46bc8-768c-4401-99bb-726c62e4da03"},
                {"header":{"id":"6a628c76-3e40-4917-9add-a6021705364b","creation_date_time":"2014-01-10T22:34:58Z","acquisition_provenance":{"source_name":"generator","source_creation_date_time":"2015-07-09T22:04:23.471+02:00","modality":"sensed"},"user_id":"some-user","schema_id":{"namespace":"omh","name":"blood-pressure","version":"1.0"}},"body":{"effective_time_frame":{"date_time":"2014-01-10T22:34:58Z"},"systolic_blood_pressure":{"unit":"mmHg","value":111.29951771734164},"diastolic_blood_pressure":{"unit":"mmHg","value":70.93678786158173}},"id":"6a628c76-3e40-4917-9add-a6021705364b"},
                {"header":{"id":"1a51d97f-0dbf-453d-b1ab-7cab24862475","creation_date_time":"2014-01-11T05:59:08Z","acquisition_provenance":{"source_name":"generator","source_creation_date_time":"2015-07-09T22:04:23.472+02:00","modality":"sensed"},"user_id":"some-user","schema_id":{"namespace":"omh","name":"blood-pressure","version":"1.0"}},"body":{"effective_time_frame":{"date_time":"2014-01-11T05:59:08Z"},"systolic_blood_pressure":{"unit":"mmHg","value":107.18804125789572},"diastolic_blood_pressure":{"unit":"mmHg","value":70.09605278312391}},"id":"1a51d97f-0dbf-453d-b1ab-7cab24862475"},
                {"header":{"id":"e94838bd-f6ea-4261-9d84-18304407a430","creation_date_time":"2014-01-11T20:39:46Z","acquisition_provenance":{"source_name":"generator","source_creation_date_time":"2015-07-09T22:04:23.472+02:00","modality":"sensed"},"user_id":"some-user","schema_id":{"namespace":"omh","name":"blood-pressure","version":"1.0"}},"body":{"effective_time_frame":{"date_time":"2014-01-11T20:39:46Z"},"systolic_blood_pressure":{"unit":"mmHg","value":106.33255672251516},"diastolic_blood_pressure":{"unit":"mmHg","value":72.06030563563793}},"id":"e94838bd-f6ea-4261-9d84-18304407a430"},
                {"header":{"id":"62dba242-6ed0-4d07-8158-c27ea0668ed2","creation_date_time":"2014-01-13T00:14:50Z","acquisition_provenance":{"source_name":"generator","source_creation_date_time":"2015-07-09T22:04:23.472+02:00","modality":"sensed"},"user_id":"some-user","schema_id":{"namespace":"omh","name":"blood-pressure","version":"1.0"}},"body":{"effective_time_frame":{"date_time":"2014-01-13T00:14:50Z"},"systolic_blood_pressure":{"unit":"mmHg","value":102.95952005647744},"diastolic_blood_pressure":{"unit":"mmHg","value":71.5500322343022}},"id":"62dba242-6ed0-4d07-8158-c27ea0668ed2"}
            ];
        } );

        it( "constructs a chart", function () {
            var chart = new OMHWebVisualizations.Chart( this.data, this.element, this.measureList, this.configSettings );
            expect( chart.initialized ).toEqual( true );
        } );


    } );

} );