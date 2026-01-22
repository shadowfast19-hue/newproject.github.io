// Генератор звуков для CS2 Case Opening
// Запустите этот файл в браузере, чтобы создать звуковые файлы

const AudioContext = window.AudioContext || window.webkitAudioContext;

function generateSound(type) {
    const ctx = new AudioContext();
    const sampleRate = ctx.sampleRate;
    let duration, buffer, data;

    switch(type) {
        case 'click':
            duration = 0.1;
            buffer = ctx.createBuffer(1, sampleRate * duration, sampleRate);
            data = buffer.getChannelData(0);
            for (let i = 0; i < buffer.length; i++) {
                data[i] = Math.random() * 2 - 1;
                data[i] *= Math.exp(-i / (sampleRate * 0.02));
            }
            break;

        case 'spin':
            duration = 0.08;
            buffer = ctx.createBuffer(1, sampleRate * duration, sampleRate);
            data = buffer.getChannelData(0);
            for (let i = 0; i < buffer.length; i++) {
                const t = i / sampleRate;
                data[i] = Math.sin(2 * Math.PI * 800 * t) * Math.exp(-t * 30);
            }
            break;

        case 'win':
            duration = 1.0;
            buffer = ctx.createBuffer(1, sampleRate * duration, sampleRate);
            data = buffer.getChannelData(0);
            for (let i = 0; i < buffer.length; i++) {
                const t = i / sampleRate;
                data[i] = (
                    Math.sin(2 * Math.PI * 523 * t) +
                    Math.sin(2 * Math.PI * 659 * t) +
                    Math.sin(2 * Math.PI * 784 * t)
                ) / 3 * Math.exp(-t * 2);
            }
            break;

        case 'sell':
            duration = 0.5;
            buffer = ctx.createBuffer(1, sampleRate * duration, sampleRate);
            data = buffer.getChannelData(0);
            for (let i = 0; i < buffer.length; i++) {
                const t = i / sampleRate;
                data[i] = (
                    Math.sin(2 * Math.PI * 1000 * t) +
                    Math.sin(2 * Math.PI * 1500 * t) * 0.5
                ) * Math.exp(-t * 5);
            }
            break;
    }

    return buffer;
}

function bufferToWav(buffer) {
    const numChannels = buffer.numberOfChannels;
    const sampleRate = buffer.sampleRate;
    const format = 1; // PCM
    const bitDepth = 16;
    
    const bytesPerSample = bitDepth / 8;
    const blockAlign = numChannels * bytesPerSample;
    
    const data = buffer.getChannelData(0);
    const samples = data.length;
    const dataLength = samples * blockAlign;
    
    const bufferLength = 44 + dataLength;
    const arrayBuffer = new ArrayBuffer(bufferLength);
    const view = new DataView(arrayBuffer);
    
    // RIFF header
    writeString(view, 0, 'RIFF');
    view.setUint32(4, bufferLength - 8, true);
    writeString(view, 8, 'WAVE');
    
    // fmt chunk
    writeString(view, 12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, format, true);
    view.setUint16(22, numChannels, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * blockAlign, true);
    view.setUint16(32, blockAlign, true);
    view.setUint16(34, bitDepth, true);
    
    // data chunk
    writeString(view, 36, 'data');
    view.setUint32(40, dataLength, true);
    
    // write samples
    let offset = 44;
    for (let i = 0; i < samples; i++) {
        const sample = Math.max(-1, Math.min(1, data[i]));
        view.setInt16(offset, sample < 0 ? sample * 0x8000 : sample * 0x7FFF, true);
        offset += 2;
    }
    
    return new Blob([arrayBuffer], { type: 'audio/wav' });
}

function writeString(view, offset, string) {
    for (let i = 0; i < string.length; i++) {
        view.setUint8(offset + i, string.charCodeAt(i));
    }
}

function downloadSound(type) {
    const buffer = generateSound(type);
    const blob = bufferToWav(buffer);
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${type}.wav`;
    a.click();
    URL.revokeObjectURL(url);
}

// Экспорт для использования
window.generateSound = generateSound;
window.downloadSound = downloadSound;

console.log('Генератор звуков загружен. Используйте downloadSound("click"), downloadSound("spin"), downloadSound("win"), downloadSound("sell")');
