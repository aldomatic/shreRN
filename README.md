## Shre App

This is a react native app.

#### Running on ios simulator
`react-native run-ios`

#### Running on a ios device
`react-native run-ios --configuration Release --device`


#### Bulding the app for production
Building an app for distribution in the App Store requires using the Release scheme in Xcode. Apps built for Release will automatically disable the in-app Developer menu, which will prevent your users from inadvertently accessing the menu in production. It will also bundle the JavaScript locally, so you can put the app on a device and test whilst not connected to the computer.

To configure your app to be built using the Release scheme, go to Product → Scheme → Edit Scheme. Select the Run tab in the sidebar, then set the Build Configuration dropdown to Release.