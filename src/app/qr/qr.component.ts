import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { variable } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "app-qr",
  templateUrl: "./qr.component.html",
  styleUrls: ["./qr.component.scss"]
})
export class QrComponent implements OnInit {
  @ViewChild("videoElement", { read: ElementRef, static: true })
  video: ElementRef;
  @ViewChild("canvasElement", { read: ElementRef, static: true })
  canvasElement: ElementRef;
  canvas: CanvasRenderingContext2D;
  loadingMessage: String;
  ready: boolean;
  codeFound: boolean;
  qrCodeValue: string;
  worker: Worker;

  constructor() {
    this.loadingMessage =
      "🎥 Unable to access video stream (please make sure you have a webcam enabled)";
    this.ready = false;
    this.codeFound = false;
    if (typeof Worker !== "undefined") {
      this.worker = new Worker("../qr.worker", { type: "module" });
    } else {
      console.log("Web Workers are not supported in this environment");
      // You should add a fallback so that your program still executes correctly.
    }
  }

  ngOnInit() {
    this.canvas = this.canvasElement.nativeElement.getContext("2d");
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: "environment" } })
      .then(stream => {
        this.video.nativeElement.srcObject = stream;
        this.video.nativeElement.play();
        /* https://developer.mozilla.org/fr/docs/Web/API/Window/requestAnimationFrame */
        requestAnimationFrame(() => this.tick());
      });

    this.worker.onmessage = ({ data }) => {
      let code = data;
      if (code) {
        this.drawLine(
          code.location.topLeftCorner,
          code.location.topRightCorner
        );
        this.drawLine(
          code.location.topRightCorner,
          code.location.bottomRightCorner
        );
        this.drawLine(
          code.location.bottomRightCorner,
          code.location.bottomLeftCorner
        );
        this.drawLine(
          code.location.bottomLeftCorner,
          code.location.topLeftCorner
        );
        this.codeFound = true;
        this.qrCodeValue = code.data;
      } else {
        this.codeFound = false;
        requestAnimationFrame(() => this.tick());
      }
    };
  }

  drawLine(begin, end) {
    this.canvas.beginPath();
    this.canvas.moveTo(begin.x, begin.y);
    this.canvas.lineTo(end.x, end.y);
    this.canvas.lineWidth = 4;
    this.canvas.strokeStyle = "#FF3B58";
    this.canvas.stroke();
  }

  tick() {
    this.loadingMessage = "⌛ Loading video...";
    if (
      this.video.nativeElement.readyState ===
      this.video.nativeElement.HAVE_ENOUGH_DATA
    ) {
      this.ready = true;
    } 
    this.canvasElement.nativeElement.height = this.video.nativeElement.videoHeight;
    this.canvasElement.nativeElement.width = this.video.nativeElement.videoWidth;
    /* affiche l'image de la balise <video> */
    this.canvas.drawImage(
      this.video.nativeElement,
      0,
      0,
      this.canvasElement.nativeElement.width,
      this.canvasElement.nativeElement.height
    );
  
    if (
      this.canvasElement.nativeElement.width > 0 &&
      this.canvasElement.nativeElement.height > 0
    ) {
      var imageData = this.canvas.getImageData(
        0,
        0,
        this.canvasElement.nativeElement.width,
        this.canvasElement.nativeElement.height
      );
      this.worker.postMessage(imageData);
    } else {
      requestAnimationFrame(() => this.tick());
  
    }
  }
}
