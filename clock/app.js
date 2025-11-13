    function pad(n) {
      return n.toString().padStart(2, '0');
    }

    function updateClock() {
      const now = new Date();
      let hrs = now.getHours();
      const mins = now.getMinutes();
      const secs = now.getSeconds();

      const isPM = hrs >= 12;
      const displayHrs = ((hrs + 11) % 12) + 1; // convert 24h → 12h

      document.getElementById('hrs').textContent = pad(displayHrs);
      document.getElementById('min').textContent = pad(mins);
      document.getElementById('sec').textContent = pad(secs);
      document.getElementById('ampm').textContent = isPM ? 'PM' : 'AM';
    }

    updateClock();
    setInterval(updateClock, 1000);
