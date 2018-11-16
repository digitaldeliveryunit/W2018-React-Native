import { Linking } from 'react-native';

export default function openGoogleMapDirection(args) {
  const { destination, source, params } = args;
  const defaultParams = [{
    key: "dirflg",
    value: "w"
  }];

  const paramsStr = params
    ? getParameterString(params)
    : getParameterString(defaultParams);

  let url = 'http://maps.google.com/maps';

  if (source && destination) {
    url = `http://maps.google.com/maps?saddr=${source.latitude},${source.longitude}&daddr=${destination.latitude},${destination.longitude}${paramsStr}`;
  } else {
    if (source && !destination) {
      url = `http://maps.google.com/maps?saddr=${source.latitude},${source.longitude}${paramsStr}`;
    } else if (!source && destination) {
      url = `http://maps.google.com/maps?daddr=${destination.latitude},${destination.longitude}${paramsStr}`;
    }
  }

  return Linking.canOpenURL(url).then((supported) => {
    if (!supported) {
      return Promise.reject(new Error(`Could not open the url: ${url}`));
    } else {
      return Linking.openURL(url);
    }
  })
}

function getParameterString(params) {
  let paramsStr = '';

  if (!params || !params.map) return paramsStr;

  params.map(({ key, value }) => {
    paramsStr += `&${key}=${value}`;
  });

  return paramsStr;
}
