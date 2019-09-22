import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <header className="header">
      <div className="cross">
        _|_
        <br />
        &nbsp;|
        <br />
      </div>
      <div className="code">Code</div>
      <div className="for">for</div>
      <div className="faith">faith</div>
    </header>
    <nav className="menu">
      <ul>
        <li>
          <a href="/">home</a>
        </li>
        <li>
          <a href="/updates.html">updates</a>
        </li>
        <li>
          <a href="/resources.html">resources</a>
        </li>
        <li>
          <a href="/contact.html">contact</a>
        </li>
      </ul>
    </nav>
    <main className="content">
      <article className="gospel">
        <h2 id="terminal-line" className="hidden">
          Heaven or Hell, where will you spend etenity?
        </h2>
        <div id="cursor-line" className="visible"></div>
        <p>
          The Bible says there is only one way to Heaven.
          <br />
          Jesus Christ said:
          <span className="verse">
            "I am the way, the truth, and the life: no man cometh unto the
            Father, but by me." (John 14:6)
          </span>
          <br />
          The Bible also says that none of us are good enough to go to Heaven.
          <br />
          <span className="verse">
            "For all have sinned, and come short of the glory of God;" (Romans
            3:23)
          </span>
          <br />
          Sin is the transgression of God's law. The one He wrote in our hearts,
          our conscience. If you have ever lied, stolen something, lusted after
          someone (Jesus said that it is adultery) or hated someone (which is
          murder in God's eyes), then you have sinned.
          <br />
          This means that by default, we are all heading for Hell. An eternity
          of fiery torments.
          <br />
          <span className="verse">
            "Marvel not at this: for the hour is coming, in the which all that
            are in the graves shall hear his voice, And shall come forth; they
            that have done good, unto the resurrection of life; and they that
            have done evil, unto the resurrection of damnation." (John 5:28-29)
          </span>
          <br />
          But God loves us so much, that He provided us a way to escape from His
          wrath. The only possible way for all our crimes to be punished without
          sending us to Hell.
          <br />
          2000 years ago, God sent His only begotten Son, Jesus Christ, to live
          a perfect life on our behalf and to die crucified as a sacrifice for
          our sins. When He died on the cross, Jesus Christ paid for our sins.
          He then raised bodily on the third day, defeating death. He now has
          legally the right to forgive us our sins. Through Him we can live
          forever in His kingdom.
          <br />
          <span className="verse">
            "For God so loved the world, that he gave his only begotten Son,
            that whosoever believeth in him should not perish, but have
            everlasting life." (John 3:16)
          </span>
          <br />
          About 150 000 people die every day. Since you started reading this,
          around 100 people died and faced God's judgment.
          <br />
          What about you? If you were to die right now, where would you spend
          eternity? In Heaven or in Hell?
          <br />
          You can be saved right now.
          <br />
          If you repent of your sins (say sorry to God and stop sinning) and
          make Jesus Christ your Lord and Savior you will be saved.
          <br />
          <span className="verse">
            "That if thou shalt confess with thy mouth the Lord Jesus, and shalt
            believe in thine heart that God hath raised him from the dead, thou
            shalt be saved." (Romans 10:9)
          </span>
          <br />
          If you have given your life to the Lord Jesus Christ, then welcome to
          the family of God!
          <br />
          You should now get a Bible (the KJV is the best) and read it every day
          to get to know Jesus Christ better.
          <br />
          The Holy Spirit will teach you and guide you in all things.
          <br />
          God will never let you down.
          <br />
          God bless you.
        </p>
      </article>
    </main>

    <footer className="footer">
      <nav className="menu">
        <ul>
          <li>
            <a href="/contact.html" title="Contact">
              <span
                className="iconify"
                data-icon="feather:mail"
                data-inline="false"
              ></span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/CodeForFaith"
              title="GitHub"
              target="_blank"
            >
              <span
                className="iconify"
                data-icon="feather-github"
                data-inline="false"
              ></span>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCxay0Nei9z7GKbaqXQSoaSg"
              title="YouTube"
              target="_blank"
            >
              <span
                className="iconify"
                data-icon="feather-youtube"
                data-inline="false"
              ></span>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/CodeForFaith"
              title="Twitter"
              target="_blank"
            >
              <span
                className="iconify"
                data-icon="feather-twitter"
                data-inline="false"
              ></span>
            </a>
          </li>
          <li>
            <a
              href="https://codepen.io/CodeForFaith"
              title="CodePen"
              target="_blank"
            >
              <span
                className="iconify"
                data-icon="feather:codepen"
                data-inline="false"
              ></span>
            </a>
          </li>
          <li>
            <a
              href="https://soundcloud.com/code-for-faith"
              title="SoundCloud"
              target="_blank"
            >
              <span
                className="iconify"
                data-icon="feather:cloud"
                data-inline="false"
              ></span>
            </a>
          </li>
          <li>
            <a href="/qr.html" title="QR Code">
              <span
                className="iconify"
                data-icon="feather:cpu"
                data-inline="false"
              ></span>
            </a>
          </li>
          <li>
            <a
              href="https://codesandbox.io/u/CodeForFaith"
              title="CodeSandbox"
              target="_blank"
            >
              <span
                className="iconify"
                data-icon="feather-codesandbox"
                data-inline="false"
              ></span>
            </a>
          </li>
        </ul>
      </nav>
      <div>Code for Faith &copy; 2019</div>
    </footer>

    <script src="scripts/typing.js"></script>
  </Layout>
)

export default IndexPage
