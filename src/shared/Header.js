import React from 'react';
import "./Header.css";

function Header() {
  return (
    <div>
        <nav class = "navbar navbar-expand-lg bg-light">
            <div class="container-fluid nav-justified">
            {/* BRAND */}
                <a class="navbar-brand" href="#">
                    MyOffice
                </a>
            {/* TOGGLE */}
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBarDropdown" aria-controls="navBarDropdown" aria-expanded="true" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                {/* Nav to be collapsed into button */}
                <div class="collapse navbar-collapse justify-content-end" id="navBarDropdown">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        <a class="nav-link active" href="#">Products</a>
                        <a class="nav-link active" href="#">About</a>
                        <a class="nav-link active" href="#">Our Team</a>
                        <a class="nav-link active" href="#">Careers</a>
                        <a class="nav-link active" href="#">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header