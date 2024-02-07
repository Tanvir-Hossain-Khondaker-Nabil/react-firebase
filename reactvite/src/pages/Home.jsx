import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div class="container-fluid bg-custom-gradient">
                <div class="container p-5">
                    <div class="row mb-5">
                        <div class="col-12 text-center top-title">
                            <h1>TECHNO BD </h1>
                            <h4>YOUE TRUSTED PARTNER</h4>
                        </div>
                    </div>
                    <div class="row mb-5">
                        <div class="col-12 text-center qr-title">
                            <h4>ব্যাংকের কর্মকর্তাগণ কোন ভাবেই আপনার কাছে আপনার কার্ডের পিন চাইবেন না ।
                                সুতরাং ব্যাংক কর্মকর্তার পরিচয়ে
                                কেহ আপনার কাছে আপনার কার্ডের পিন জানতে চাইলে তা তাকে জানাবেন না ।</h4>
                        </div>
                    </div>
                    <div class="row mb-5">
                        <div class="col-md-4"></div>
                        <div class="col-md-4 px-5">
                            <div class="techno-bd">
                                <div class="techno">
                                    <h4>Techno</h4>
                                </div>
                                <div class="bd">
                                    <h4>BD</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 slide ps-4">
                            <a class="d-flex mb-3">
                                <div class="top-rocket-withdraw">
                                    <h5 class="en">ROCKET A/C WITHDRAW</h5>
                                    <h5 class="bn">রকেট টাকা উত্তোলন</h5>
                                </div>
                                <div class="col-md-2 bottom-rocket-withdraw">
                                    <h4>N</h4>
                                </div>
                            </a>
                            <Link class="d-flex" to='/qrcodepage'>
                                <div class="top-qr-withdraw">
                                    <h4 class="en">QR CODE WITHDRAW</h4>
                                    <h4 class="bn">QR CODE টাকা উত্তোলন</h4>
                                </div>
                                <div class="col-md-2 bottom-qr-withdraw">
                                    <h4>Q</h4>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 third-title">
                            <h4>প্রতারণা এড়াতেঃ</h4>
                            <p>কোন অবস্থাতেই আপনার কার্ড / পিন / গোপন কোড অন্য কাউকে হস্তান্তর করবেন না এবং কেউ সাহায্য করতে চাইলেও তার
                                সাহায্য নিবেন না ।</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
