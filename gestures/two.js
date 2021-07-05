import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

export const TwoGesture = new GestureDescription('two');

TwoGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
TwoGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 0.8);
TwoGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 0.8);

TwoGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
TwoGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1)
TwoGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
TwoGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1)
