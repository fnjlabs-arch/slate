// About SadSha Slate — brand art, credit, and support links. Opened from the Home
// screen button or the app menu's "About SadSha Slate" (via the about:open IPC event).

import React from 'react'
import brandArt from '../assets/brand.webp'
import pkg from '../../../../package.json'

const APP_VERSION = (pkg as { version: string }).version

export default function AboutModal({ onClose }: { onClose(): void }): React.JSX.Element {
  return (
    <div className="modal-scrim" onClick={onClose}>
      <div className="modal about-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-body" style={{ textAlign: 'center', padding: '22px 26px' }}>
          <img className="about-brand" src={brandArt} alt="SadSha Slate" />
          <p className="about-text">
            SadSha Slate is the prompt studio for AI filmmaking — plan shots, direct coverage, spot your
            score, cast your voices, and keep continuity across an entire film while an AI brain
            helps you craft every prompt. Compile each one for your generator of choice; SadSha Slate
            makes the prompts, your generators make the picture and sound.
          </p>
          <p className="about-meta">
            Version {APP_VERSION} · Apache-2.0 · Created by Sam Wasserman
            <br />
            Brain: your Claude Code or Codex sign-in, or a local model — no API keys.
            <br />
            <a href="https://github.com/fnjlabs-arch/slate" target="_blank" rel="noreferrer">
              github.com/fnjlabs-arch/slate
            </a>
          </p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
            <a
              className="btn btn-key"
              href="https://github.com/fnjlabs-arch/slate"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'none' }}
            >
              View on GitHub
            </a>
            <button className="btn" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
