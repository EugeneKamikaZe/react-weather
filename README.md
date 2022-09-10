# App in progress


# Animated React weather widget

Api used

- [openweathermap](https://openweathermap.org/): weather query for the day and for the coming days
- [geocode](https://openweathermap.org/api/geocoding-api): transformation of any location name into geographical
  coordinates, and the other way around (reverse geocoding)

### Reference

[figma](https://www.figma.com/file/MLdKhxuwp6OtliCTE7hWmq/Weather-Widget?node-id=0%3A1) 

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

use `npm run install` in the project root folder
