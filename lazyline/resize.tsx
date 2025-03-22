const { width, height } = useDebouncedResize(300); // 300ms debounce

function useDebouncedResize(delay: number) {
  const [size, setSize] = useState({ width: 300, height: 150 });
  
  useEffect(() => {
    const handler = debounce(() => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }, delay);

    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [delay]);

  return size;
}