function loadPlaylist() {
  const playlistId = document.getElementById('playlistId').value;
  const playlistContainer = document.getElementById('playlistContainer');
  const miniPlayer = document.getElementById('miniPlayer');

  // Clear previous content
  playlistContainer.innerHTML = '';
  miniPlayer.innerHTML = '';

  // Embed the playlist
  const playlistEmbed = document.createElement('iframe');
  playlistEmbed.src = `https://open.spotify.com/embed/playlist/${playlistId}`;
  playlistEmbed.width = '300';
  playlistEmbed.height = '380';
  playlistEmbed.frameBorder = '0';
  playlistEmbed.allowtransparency = 'true';
  playlistContainer.appendChild(playlistEmbed);

  // Create miniplayer
  const miniPlayerEmbed = document.createElement('iframe');
  miniPlayerEmbed.src = `https://open.spotify.com/embed/playlist/${playlistId}`;
  miniPlayerEmbed.width = '300';
  miniPlayerEmbed.height = '80';
  miniPlayerEmbed.frameBorder = '0';
  miniPlayerEmbed.allowtransparency = 'true';
  miniPlayer.appendChild(miniPlayerEmbed);
}
