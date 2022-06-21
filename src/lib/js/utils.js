export function useLazyImage(
    node,
    { root = null, rootMargin = '0px 0px 0px 0px', threshold = 0.0 } = {},
    ) {
        if (window && 'IntersectionObserver' in window) {
            const observer = new IntersectionObserver(
                entries => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const image = entry.target;

                            if (image.dataset.src) {
                                image.src = image.dataset.src;
                            }

                            if (image.dataset.srcset) {
                                image.srcset = image.dataset.srcset;
                            }
                            node.setAttribute("Seen", "seen")
                            observer.unobserve(image);
                        }
                    });
                },
                {
                    root,
                    rootMargin,
                    threshold,
                },
            );
            observer.observe(node);

            return {
                destroy() {
                    if (observer) {
                        observer.unobserve(node);
                    }
                },
            };
        }
} // Src: https://github.com/alexstaroselsky/svelte-lazy-image

// Dispatch event on click outside of node
export function clickOutside(node) {
  
    const handleClick = event => {
      if (node && !node.contains(event.target) && !event.defaultPrevented) {
        node.dispatchEvent(
          new CustomEvent('click_outside', node)
        )
      }
    }
  
      document.addEventListener('click', handleClick, true);
    
    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
      }
  }

