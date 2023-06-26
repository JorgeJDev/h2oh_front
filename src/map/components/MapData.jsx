

export const MapData = () => {
  return (
    <div
        dangerouslySetInnerHTML={{
            __html: `
            <iframe title="Your map title" aria-label="Map" id="datawrapper-chart-N33NM" src="https://datawrapper.dwcdn.net/N33NM/3/"
            scrolling="no" frameborder="0" style="width: 0; min-width: 100% ; border: none;" height="600"></iframe>
            `,
        }}
    />
);
}
