# Animated React weather widget

Api used 
- [openweathermap](https://openweathermap.org/): weather query for the day and for the coming days
- [geocode](https://openweathermap.org/api/geocoding-api): transformation of any location name into geographical coordinates, and the other way around (reverse geocoding)
- [sunrise - sunset](https://sunrise-sunset.org/api):  API that provides sunset and sunrise times for a given latitude and longitude

### Reference

[figma](https://www.figma.com/file/MLdKhxuwp6OtliCTE7hWmq/Weather-Widget?node-id=0%3A1) - designed by Sonya Artemenko and Eugene Egorov

## How to use

At first, you need to get  [API key](https://openweathermap.org/price).

Use component to show the widget.

```javascript
<WeatherContainer  
    APIKey={APIKey} 
    initialPlace={initialPlace} 
    units={Units.Metric}
/>
```

## Before start

use `npm install` in the project root folder

## Available Scripts

In the project directory, you can run:

```npm dev```

Runs the app in the development mode.\
The application will open automatically.\
If this did not happen - open [http://localhost:3000](http://localhost:3000) to view it in the browser.

```npm build```

Builds the app for development to the `dist` folder.

``npm preview``

Preview static files.\
Use that after ***npm build***
