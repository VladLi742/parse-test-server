module.exports = function logo (version, date) {
  return `
  ██████╗  █████╗ ███╗   ██╗██████╗  ██████╗ ███╗   ███╗    ███╗   ██╗ ██████╗ ████████╗███████╗███████╗
  ██╔══██╗██╔══██╗████╗  ██║██╔══██╗██╔═══██╗████╗ ████║    ████╗  ██║██╔═══██╗╚══██╔══╝██╔════╝██╔════╝
  ██████╔╝███████║██╔██╗ ██║██║  ██║██║   ██║██╔████╔██║    ██╔██╗ ██║██║   ██║   ██║   █████╗  ███████╗
  ██╔══██╗██╔══██║██║╚██╗██║██║  ██║██║   ██║██║╚██╔╝██║    ██║╚██╗██║██║   ██║   ██║   ██╔══╝  ╚════██║
  ██║  ██║██║  ██║██║ ╚████║██████╔╝╚██████╔╝██║ ╚═╝ ██║    ██║ ╚████║╚██████╔╝   ██║   ███████╗███████║
  ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝  ╚═════╝ ╚═╝     ╚═╝    ╚═╝  ╚═══╝ ╚═════╝    ╚═╝   ╚══════╝╚══════╝

  ${version} | ${date} | fartem
  `
}
