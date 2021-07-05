import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

export const OneGesture = new GestureDescription('one');

OneGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
OneGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 0.8);
OneGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 0.8);
OneGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 0.8);

OneGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
OneGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1)

