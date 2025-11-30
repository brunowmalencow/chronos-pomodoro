let workerInstance: TimerWorkerManager | null = null

export class TimerWorkerManager {
    private worker: Worker;

    private constructor() {
        this.worker = new Worker(new URL('../../Workers/timerWorker.js', import.meta.url))
    }

    static getInstance() {
        if (!workerInstance) {
            workerInstance = new TimerWorkerManager()
        }
        return workerInstance
    }

    postMessage(message: any){
        this.worker.postMessage(message)
    }

    onmessage(callback: (event: MessageEvent) => void){
        this.worker.onmessage = callback
    }

    terminate(){
        this.worker.terminate()
        workerInstance = null
    }
}