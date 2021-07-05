import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

export const ThreeGesture = new GestureDescription('three');

ThreeGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
ThreeGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 0.8);

ThreeGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
ThreeGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);
ThreeGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
ThreeGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1);
ThreeGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
ThreeGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.8);
