import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

export const AngryGesture = new GestureDescription('angry');

// Pulgar
AngryGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
AngryGesture.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 0.8);

//Demas dedos
AngryGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 0.8);
AngryGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 0.8);
AngryGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 0.8);
AngryGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 0.8);
