# My Event
## Development Notes
1. Modules have problem with gradle 3.x when build release:
    - Solutions: we find 3 ways to fix this problem 
    + Way 1 (not recommended): Find file android/build.gradle in modules (node_modules) occur this issue and override with code line as below
    compileSdkVersion 26
    buildToolsVersion "26.0.3"
    defaultConfig {
            minSdkVersion 16
            targetSdkVersion 26
            versionCode 1
            versionName "1.0"
    }
    + Way 2 (depend on the version of modules): check latest version supported compileSdkVersion 26 or not. If they are supported, kindly upgrade these modules. Currently, there are only react-native-fetch-blob and react-native-fs supported compileSdkVersion 26.

    + Way 3 (recommended): find this file android/build.gradle and add these lines as below
    subprojects {
        afterEvaluate {project ->
            if (project.hasProperty("android")) {
                android {
                    compileSdkVersion 26
                    buildToolsVersion '26.0.3'
                }
            }
        }
    }
