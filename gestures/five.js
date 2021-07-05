import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

export const FiveGesture = new GestureDescription('five');

FiveGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);
//FiveGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.8);
//FiveGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRigth, 0.8);
FiveGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
FiveGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);
FiveGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
FiveGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1);
FiveGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
FiveGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.8);
FiveGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
FiveGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.8);

