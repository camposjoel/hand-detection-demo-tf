import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

export const FourGesture = new GestureDescription('four');

FourGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);

FourGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
FourGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);
FourGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
FourGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1);
FourGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
FourGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.8);
FourGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
FourGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.8);
FourGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRigth, 0.8);

