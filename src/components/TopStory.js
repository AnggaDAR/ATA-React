import React, { Component } from 'react';

class TopStory extends Component {
  render() {
    return (
        <div class="col-4">
            <div class="card">
                <div class="card-header text-center">
                    Top Story
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item m-0">
                        <a class="nav-link" data-toggle="pill" href="#" role="tab" >Gabung Alpha Tech Academy Sekarang!</a>
                    </li>
                    <li class="list-group-item m-0">
                        <a class="nav-link" data-toggle="pill" href="#" role="tab" >Ada apa antara Kobar dan Hasan?</a>
                    </li>
                    <li class="list-group-item m-0">
                        <a class="nav-link" data-toggle="pill" href="#" role="tab" >Mengenal Arafat sang Master Python</a>
                    </li>
                    <li class="list-group-item m-0">
                        <a class="nav-link" data-toggle="pill" href="#" role="tab" >Belajar reactJs itu seru. Kamu setuju?</a>
                    </li>
                    <li class="list-group-item m-0">
                        <a class="nav-link" data-toggle="pill" href="#" role="tab" >Sudahkah kamu sehat mental</a>
                    </li>
                </ul>
            </div>
            {/* <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a class="nav-link" data-toggle="pill" href="#v-pills-home" role="tab" >
                
                </a>
                <a class="nav-link" data-toggle="pill" href="#v-pills-profile" role="tab" >
                
                </a>
                <a class="nav-link" data-toggle="pill" href="#v-pills-messages" role="tab" >
                
                </a>
                <a class="nav-link" data-toggle="pill" href="#v-pills-settings" role="tab" >
                
                </a>
            </div> */}
        </div>
    );
  }
}

export default TopStory;
