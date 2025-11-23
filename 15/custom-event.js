// membuat object untuk custom event
const namaObjectEvent = new Event('nama-event');

// mendengarkan event
domObject.addEventListener('nama-event', function(){ })

// memicu atau trigger event
domObject.dispatchEvent(namaObjectEvent);
                                                    
// atau bisa juga di-trigger pada object window dan document
window.dispatchEvent(namaObjectEvent);
document.dispatchEvent(namaObjectEvent);