function descargarApp() {
    // Crea un enlace temporal para la descarga
    var link = document.createElement('a');
    link.href = "/media/app-debug.apk";  // Ajusta la ruta según la ubicación de tu archivo APK
    link.download = 'app-debug.apk';

    // Dispara el evento de clic en el enlace
    link.click();
}
