/**
 * Reference:
 * https://blog.csdn.net/qq_42476927/article/details/124354534?utm_source=app&app_version=4.21.0&code=app_1562916241&uLinkId=usr1mkqgl919blen
 */

const directives = {
  drag: {
    mounted(el, binding, vnode) {
      if (!binding.value && (binding.value ?? "") !== "") return;

      const odiv = el.parentNode;
      el.onmousedown = (eve) => {
        console.log("Mouse down");
        odiv.style.zIndex = 1;
        eve = eve || window.event;
        const mx = eve.pageX; // Position X when mouse clicking
        const my = eve.pageY; // Position Y when mouse clicking
        const dleft = odiv.offsetLeft; // Window initial position
        const dtop = odiv.offsetTop;
        const clientWidth = document.documentElement.clientWidth; // Page width
        const oWidth = odiv.clientWidth; // Window width
        const maxX = clientWidth - oWidth; // Max x axis move position
        const clientHeight = document.documentElement.clientHeight; // Page height
        const oHeight = odiv.clientHeight; // Window height
        const maxY = clientHeight - oHeight; // Max y axis move position
        document.onmousemove = (e) => {
          console.log("Mouse move");
          const x = e.pageX;
          const y = e.pageY;
          let left = x - mx + dleft;
          let top = y - my + dtop;
          //   if (left < 0) left = 0;
          //   if (left > maxX) left = maxX;
          //   if (top < 0) top = 0;
          //   if (top > maxY) top = maxY;

          odiv.style.left = left + "px";
          odiv.style.top = top + "px";
          odiv.style.marginLeft = 0;
          odiv.style.marginTop = 0;
        };
        document.onmouseup = () => {
          document.onmousemove = null;
        };
      };
    },
  },
};

export { directives };
