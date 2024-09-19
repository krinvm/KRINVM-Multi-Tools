const panelContainer = document.createElement('div');
 panelContainer.id = 'scriptPanel';
 panelContainer.style.position = 'fixed';
 panelContainer.style.top = '790px';
 panelContainer.style.left = '1018px';
 panelContainer.style.zIndex = '9999';
 document.body.appendChild(panelContainer);


  let intervalId;

  const panelStyles = `
    #scriptPanel button {
      background-color: red;
      color: white;
      padding: 8px 12px;
      margin-right: 10px;
      border: none;
      cursor: pointer;
      outline: none;
      border-radius: 4px;
    }

    #scriptPanel button:hover {
      background-color: darkred;
    }

    #scriptPanel button.active {
      background-color: green;
    }
  `;

  const styleElement = document.createElement('style');
  styleElement.textContent = panelStyles;
  document.head.appendChild(styleElement);

  const madeByKrinvm = document.getElementById('madeByKrinvm');
  if (madeByKrinvm) {
    madeByKrinvm.style.top = 'calc(30px + 20px)';
  }

    const welcomeWindowHTML = `
    <div id="welcomeWindow" style="display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: #333; padding: 20px; text-align: center; border: 2px solid rgba(0, 0, 0, 0.2); transition: opacity 0.5s, visibility 0.5s; z-index: 10000;">
      <h1 style="color: white; font-weight: bold;">KRINVM Multi-Tools</h1>
      <h3 style="color: white; font-weight: bold; font-size: 24px;">Version: <span style="font-size: 28px;">V1.0</span></h3>
      <!-- gif1 -->
      <h2 style="color: white;">
        ¡Hola! Soy krinvm y este es mi primer Script para pony.town. Si deseas más scripts útiles entra a: https://github.com/krinvm
      </h2>
      <img src="https://i.pinimg.com/originals/c7/9f/d0/c79fd0bec90cca55e7de3d0ec2ad514e.gif" alt="Your GIF" style="display: block; margin: 20px auto 0; width: 373px; height: 500px;">
      <h2 style="color: white;">
      </h2>
      <hr style="border-top: 1px solid white;">
      <button id="letsGoButton" style="background-color: #5cb85c; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; margin-top: 20px;">Aceptar!</button>
    </div>
    <div id="overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); backdrop-filter: blur(5px); z-index: 9999;"></div>
    <div id="madeByKrinvm" style="position: fixed; top: 720px; right: 10px; font-size: 16px; z-index: 10001;">
<a href="https://www.youtube.com/@KRINVM2" target="_blank" style="text-decoration: none;">
    <span id="madeByText" style="cursor: pointer; color: #FFFFFF;">Hecho por KRINVM</span>
</a>

      <img id="krinvmImage" src="https://i.ibb.co/Bnm5M9G/sshot-2024-08-07-1.png" alt="photo" width="75" height="54" style="vertical-align: middle; margin-left: 5px; opacity: 0.7;">
    </div>
  `;



  panelContainer.innerHTML = welcomeWindowHTML;

  const welcomeWindow = document.getElementById('welcomeWindow');
  const letsGoButton = document.getElementById('letsGoButton');

  setTimeout(() => {
    welcomeWindow.style.opacity = '1';
    welcomeWindow.style.visibility = 'visible';
  }, 500);

  function closeWelcomeWindow() {
    welcomeWindow.style.opacity = '0';
    welcomeWindow.style.visibility = 'hidden';
    setTimeout(() => {
      overlay.style.display = 'none';
      overlay.style.pointerEvents = 'auto';
    }, 1000);
  }

  letsGoButton.addEventListener('click', closeWelcomeWindow);
  letsGoButton.addEventListener('mouseover', function() {
    letsGoButton.style.backgroundColor = '#4CAF50';
  });
  letsGoButton.addEventListener('mouseout', function() {
    letsGoButton.style.backgroundColor = '#5cb85c';
  });

  setTimeout(() => {
    welcomeWindow.style.display = 'block';
  }, 1000);

  letsGoButton.addEventListener('click', closeWelcomeWindow);

  const antiafkButton = document.createElement('button');
  antiafkButton.textContent = 'ANTI-AUS';
  antiafkButton.style.backgroundColor = 'red';
  antiafkButton.style.color = 'white';
  antiafkButton.style.padding = '8px 12px';
  antiafkButton.style.marginRight = '10px';
  antiafkButton.style.border = 'none';
  antiafkButton.style.cursor = 'pointer';
  antiafkButton.style.borderRadius = '4px';
  panelContainer.appendChild(antiafkButton);

  const autoWriterButton = document.createElement('button');
  autoWriterButton.textContent = 'AUTO-ANUNCIADOR';
  autoWriterButton.style.backgroundColor = 'red';
  autoWriterButton.style.color = 'white';
  autoWriterButton.style.padding = '8px 12px';
  autoWriterButton.style.marginRight = '10px';
  autoWriterButton.style.border = 'none';
  autoWriterButton.style.cursor = 'pointer';
  autoWriterButton.style.borderRadius = '4px';
  panelContainer.appendChild(autoWriterButton);

  let isAntiafkActive = false;
  let isAutoWriterActive = false;
  let intervalIdAutoWriter;

  antiafkButton.addEventListener('click', toggleAntiafk);
  autoWriterButton.addEventListener('click', toggleAutoWriter);

    const overlay = document.getElementById('overlay');
  if (overlay) {
    overlay.style.pointerEvents = 'none';
    overlay.style.display = 'block';

    const letsGoButton = document.getElementById('letsGoButton');
    if (letsGoButton) {
      letsGoButton.addEventListener('click', function() {
        overlay.style.display = 'none';
        overlay.style.pointerEvents = 'auto';
      });
    }
  }

  function click() {
    var event = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    var element = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2);
    element.dispatchEvent(event);

    console.log("click");
  }

  function startClicking() {
    intervalId = setInterval(click, 270000);
    console.log("script starting");
  }

  function stopClicking() {
    clearInterval(intervalId);
    console.log("script stop");
    setTimeout(function() {
      console.clear();
    }, 5000);
  }

  function toggleAntiafk() {
    isAntiafkActive = !isAntiafkActive;
    if (isAntiafkActive) {
      antiafkButton.classList.add('active');
      antiafkButton.style.backgroundColor = 'green';
      console.log('ANTI-AUS enable');
      startClicking();
    } else {
      antiafkButton.classList.remove('active');
      antiafkButton.style.backgroundColor = 'red';
      console.log('ANTI-AUS disable');
      stopClicking();
    }
  }
  antiafkButton.addEventListener('click', toggleAntiafk);

  function sendMessage(statsText) {
    let messageCount = 0;
    let isChatOpen = false;
    let isSendingMessage = false;

    function click() {
      var event = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      });
      var element = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2);
      element.dispatchEvent(event);

      console.log("click");
    }

    function openChat() {
      const chatButton = document.querySelector(".chat-open-button button");

      if (chatButton) {
        chatButton.click();
        isChatOpen = true;
      }
    }


    function closeChat() {
      const closeButton = document.querySelector(".chat-close-button button");

      if (closeButton) {
        closeButton.click();
        isChatOpen = false;
      }
    }

function sendMessage(statsText) {
  if (isAutoWriterActive) {
    if (isChatOpen) {
      if (!isSendingMessage) {
        isSendingMessage = true;
        const textareaElement = document.querySelector("textarea[aria-label='Chat message']");

        if (textareaElement) {
          const statsTextWithoutFps = statsText.replace(/\d+\s?fps/, '');
          textareaElement.value = `${++messageCount} ${statsTextWithoutFps}`;

          const enterEvent = new KeyboardEvent("keydown", {
            key: "Enter",
            bubbles: true,
            cancelable: true,
          });

          textareaElement.dispatchEvent(enterEvent);
          const sendButton = document.querySelector("ui-button[title='Send message (hold Shift to send without closing input)'] button");
          if (sendButton) {
            sendButton.click();
          }

          if (messageCount === 200) {
            location.reload();
          }
        }
        isSendingMessage = false;
      } else {
        setTimeout(sendMessage, 1000, statsText);
      }
    } else {
      openChat();
    }
  }
}

    function updateAndSendMessage() {
      sendMessage(statsText);

      if (Math.random() < 0.39) {
        click();
      }
    }
    setInterval(updateAndSendMessage, 4000 + Math.random() * 2000);
  }
  function toggleAutoWriter() {
    isAutoWriterActive = !isAutoWriterActive;
    if (isAutoWriterActive) {
      autoWriterButton.classList.add('active');
      autoWriterButton.style.backgroundColor = 'green';
      console.log('AUTO-ANUNCIADOR enable');
      console.log('Escribe el texto que quieres repetir:');
      const adText = prompt('Escribe el texto que quieres repetir:');
      if (adText !== null) {
        const statsText = adText.trim() || 'Default text';
        sendMessage(statsText);
      } else {
        autoWriterButton.classList.remove('active');
        autoWriterButton.style.backgroundColor = 'red';
        isAutoWriterActive = false;
        console.log('AUTO-ANUNCIADOR disable');
      }
    } else {
      autoWriterButton.classList.remove('active');
      autoWriterButton.style.backgroundColor = 'red';
      console.log('AUTO-ANUNCIADOR disable');
      stopAutoWriterActions();
    }
  }
     function stopAutoWriterActions() {
    clearInterval(intervalIdAutoWriter);
    console.log("AUTO-ANUNCIADOR stopping");
  }

  autoWriterButton.addEventListener('click', toggleAutoWriter);
  antiafkButton.addEventListener('click', toggleAntiafk);
  autoWriterButton.addEventListener('click', toggleAutoWriter);

const style = document.createElement('style');
style.appendChild(
  document.createTextNode(`
    .chat-line.highlight { background-color: rgba(239, 4, 239, 0.56); }
    .chat-line.hidden { display: none; }
    .filter-line {
      background: rgba(0,0,0,0.1);
      border-radius: 3px;
      border: 1px solid rgba(0,0,0,0.3);
      margin-left: 2px;
      margin-bottom: 2px;
      color: white;
    }
  `)
);
document.getElementsByTagName('head')[0].appendChild(style);

var namesFilter = [];
var chatListener = null;
var playingListener = null;
var filterInput = null;
var filterinjected = false;

const uninjectFilter = () => {
  if (!filterinjected) {
    return;
  }
  filterinjected = false;

  console.log('removing chat filter');
  if(chatListener != null) {
    chatListener.disconnect();
  }

  if(filterInput != null) {
    filterInput.remove();
  }
};

const injectFilter = () => {
  if (filterinjected) {
    return;
  }
  filterinjected = true;
  console.log('injecting chat filter');
  const chatContents = document.querySelector('.chat-log-scroll-inner');

  const refreshLineHighlight = (line) => {
    const name = line.querySelector('.chat-line-name-content').innerText;
    if (namesFilter.length == 0 || !namesFilter[0]) {
      // line.classList.remove('highlight');
      line.classList.remove('hidden');
      return;
    }
    for (let n of namesFilter) {
      if (name.toLowerCase().includes(n.toLowerCase())) {
        // line.classList.add('highlight');
        line.classList.remove('hidden');
        break;
      } else {
        // line.classList.remove('highlight');
        line.classList.add('hidden');
      }
    }
  };

  const refreshAllHighlight = () => {
    chatContents.querySelectorAll('.chat-line').forEach((line) => refreshLineHighlight(line));
  };

  filterInput = document.createElement('input');
  filterInput.type = 'text';
  filterInput.classList.add('filter-line');
  filterInput.style.minWidth = '300px';
  filterInput.placeholder = 'Filtrar Nombres (separado por comas)';
  filterInput.onkeydown = (e) => {
    if (e.code == 'Escape' || e.code == 'Enter') {
      e.target.blur();
    }
  };
  filterInput.oninput = (e) => {
    namesFilter = e.target.value
      .split(',')
      .map((s) => s.trim())
      .filter((s) => s);
    refreshAllHighlight();
  };
  document.querySelector('.chat-log-tabs').appendChild(filterInput);

  chatListener = new MutationObserver((mutations, obs) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((line) => {
        refreshLineHighlight(line);
      });
    });
  });
  chatListener.observe(chatContents, { childList: true });
};

playingListener = new MutationObserver((mutations, obs) => {
  mutations.forEach((mutation) => {
    if (mutation.attributeName === 'class') {
      if(mutation.target.classList.contains('playing')){
        setTimeout(injectFilter, 1000);
      } else {
        uninjectFilter();
      }
    }
  });
})
playingListener.observe(document.querySelector('body'), { attributes: true });

    //COMIENZA AUTO RECONECTAR

    // Función para verificar el estado de conexión
    function checkConnection() {
        if (document.body.innerText.includes("Disconnected") || document.body.innerText.includes("Error")) {
            console.log("Desconectado. Intentando reconectar...");
            reconnect();
        } else {
            console.log("Conectado.");
        }
    }

    // Función para reconectar
    function reconnect() {
        // Aquí puedes agregar cualquier lógica adicional que necesites para reconectar
        setTimeout(() => {
            window.location.reload();
        }, 3000); // Espera 3 segundos antes de recargar
    }

    // Función para hacer clic en el botón "Play"
    function clickPlayButton() {
        const playButton = [...document.querySelectorAll('div strong')]
            .find(el => el.innerText.includes("Play"));

        if (playButton) {
            console.log("Esperando 10 segundos antes de hacer clic en el botón 'Play'...");
            setTimeout(() => {
                console.log("Haciendo clic en el botón 'Play'...");
                playButton.click();
            }, 5000); // Espera 5 segundos antes de hacer clic
        }
    }

    // Intervalo para verificar la conexión cada 3 segundos
    setInterval(checkConnection, 3000);

    // Observador de mutaciones para detectar cambios en el DOM
    const observer = new MutationObserver(() => {
        if (document.location.href === "https://pony.town/") {
            clickPlayButton();
        }
    });

    // Comenzar a observar el body
    observer.observe(document.body, { childList: true, subtree: true });
