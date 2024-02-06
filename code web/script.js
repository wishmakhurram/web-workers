document.getElementById('processButton').addEventListener('click', processData);

function processData() {
  // Generate large array (for demonstration)
  const array = Array.from({ length: 100000 }, () => Math.floor(Math.random() * 1000));
  // Start Web Worker for processing
  const worker = new Worker('worker.js');
  // Send data to Web Worker
  worker.postMessage(array);
  // Receive result from Web Worker
  worker.onmessage = function(event) {
    document.getElementById('result').textContent = 'Processing complete. Result: ' + event.data;
  };
}
Worker.js
onmessage = function(event) {
  const data = event.data;
  // Heavy data processing (e.g., sorting large arrays, complex calculations)
  const result = data.sort((a, b) => a - b);
  // Send result back to main thread
  postMessage(result);
};