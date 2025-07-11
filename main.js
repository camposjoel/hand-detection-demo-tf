import Webcam from 'webcam-easy';
import '@tensorflow/tfjs-backend-webgl';
import * as handpose from '@tensorflow-models/handpose';
import * as fingerpose from 'fingerpose';
import { drawHand } from './utils';
import './style.css';
import { AngryGesture } from './gestures/angry';
import { OneGesture } from './gestures/one';
import { TwoGesture } from './gestures/two';
import { ThreeGesture } from './gestures/three';
import { FourGesture } from './gestures/four';
import { FiveGesture } from './gestures/five';

const msg = { 
  thumbs_up: '😀',
  angry: '😡',
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5'
};

const webcamElement = document.getElementById('webcam');
const canvasElement = document.getElementById('canvas');
const webcam = new Webcam(webcamElement, 'user', canvasElement);

const messagebox = document.getElementById('message');

webcam.start()
  .then(res => {
    console.log("Webcam Iniciada");
    runHandpose();
  })
  .catch(err => {
    console.log(err);
  });

async function runHandpose() {
  const model = await handpose.load();
  console.log("Hadpose loaded");
  setInterval(() => {
    detect(model);
  }, 100);
}

async function detect(model) {
  const videoWidth = webcamElement.videoWidth;
  const videoHeight = webcamElement.videoHeight;
  webcamElement.width = videoWidth;
  webcamElement.height = videoHeight;
  canvasElement.width = videoWidth;
  canvasElement.height = videoHeight;
  const predictions = await model.estimateHands(webcamElement);
  //console.log(hand);

  if (predictions.length > 0) {
    const GE = new fingerpose.GestureEstimator([
      fingerpose.Gestures.ThumbsUpGesture,
      AngryGesture,
      OneGesture,
      TwoGesture,
      ThreeGesture,
      FourGesture,
      FiveGesture
    ]);
    const gesture = await GE.estimate(predictions[0].landmarks, 4);
    if (gesture.gestures !== undefined && gesture.gestures.length > 0) {

      const score = gesture.gestures.map(
        (prediction) => prediction.score
      );
      const maxConfidence = score.indexOf(
        Math.max.apply(null, score)
      );

      messagebox.innerHTML = msg[gesture.gestures[maxConfidence].name];
      
    }
  }

  const ctx = canvasElement.getContext("2d");
  drawHand(predictions, ctx);
}
