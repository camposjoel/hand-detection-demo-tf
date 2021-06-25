import Webcam from 'webcam-easy';
import * as tf from '@tensorflow/tfjs';
import * as handpose from '@tensorflow-models/handpose';
import { drawHand } from './utils';
import './style.css';

const webcamElement = document.getElementById('webcam');
const canvasElement = document.getElementById('canvas');
const webcam = new Webcam(webcamElement, 'user', canvasElement);

webcam.start()
  .then(res => {
    console.log("Webcam Iniciada");
    runHandpose();
  })
  .catch(err => {
    console.log(err);
  });

async function runHandpose() {
  const net = await handpose.load();
  console.log("Hadpose loaded");
  setInterval(() => {
    detect(net);
  }, 100);
}

async function detect(net) {
  const videoWidth = webcamElement.videoWidth;
  const videoHeight = webcamElement.videoHeight;
  webcamElement.width = videoWidth;
  webcamElement.height = videoHeight;
  canvasElement.width = videoWidth;
  canvasElement.height = videoHeight;
  const hand = await net.estimateHands(webcamElement);
  //console.log(hand);
  const ctx = canvasElement.getContext("2d");
  drawHand(hand, ctx);
}
