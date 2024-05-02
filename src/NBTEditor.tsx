export default function NBTEditor() {
    return (
        <>
            <div class="col-xxl-2 text-center" style="background: rgb(35,40,50);">
                <div class="card"></div>
            </div>
            <div class="col-md-12 d-xxl-flex justify-content-xxl-start" style="margin-bottom: 5px;border-style: none;padding-top: 5px;padding-bottom: 5px;background: rgb(35,40,50);">
                <div class="dropdown" style="width: 250px;">
                    <button class="btn btn-primary dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown" type="button" style="height: 35px;width: 250px;text-align: left;background: rgb(30,35,45);">(Icon / Title)</button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">First Item</a>
                        <a class="dropdown-item" href="#">Second Item</a>
                        <a class="dropdown-item" href="#">Third Item</a>
                    </div>
                </div>
                <button class="btn btn-primary" type="button" style="color: rgb(250,250,250);height: 35px;text-align: center;background: rgb(55,60,70);border: 2px solid rgb(75,80,90);border-radius: 5px;width: 99px;font-size: 16px;margin-left: 5px;">
                    <i class="fa fa-close"></i>
                    Close
                </button>
                <button class="btn btn-primary" type="button" style="color: rgb(250,250,250);height: 35px;text-align: center;background: rgb(55,60,70);border: 2px solid rgb(75,80,90);border-radius: 5px;width: 99px;font-size: 16px;margin-left: 5px;">
                    <i class="fa fa-save"></i>
                    &nbsp;Save
                </button>
                <div class="card" style="margin-right: 5px;margin-left: 5px;width: 2px;background: rgb(55,60,70);"></div>
                <button class="btn btn-primary" type="button" style="color: rgb(250,250,250);height: 35px;text-align: center;background: rgb(55,60,70);border: 2px solid rgb(75,80,90);border-radius: 5px;width: 35px;font-size: 16px;">
                    <strong class="text-center">+</strong>
                </button>
            </div>
            <div class="col-md-12 d-xxl-flex justify-content-xxl-start align-items-xxl-center" style="margin-bottom: 5px;border-style: none;padding-top: 5px;padding-bottom: 5px;background: rgb(35,40,50);">
                <button class="btn btn-primary d-flex d-xxl-flex justify-content-center align-items-center align-content-center align-self-center justify-content-xxl-center align-items-xxl-center" type="button" style="background: rgb(55,60,70);margin-top: 15px;color: white;margin-bottom: 15px;margin-right: 5px;margin-left: 5px;width: 35px;height: 35px;border-radius: 5px;text-align: center;border: 1px solid rgb(75,80,90);">
                    <i class="fa fa-folder-open" style="font-size: 20px;"></i>
                </button>
                <button class="btn btn-primary d-flex d-xxl-flex justify-content-center align-items-center align-content-center align-self-center justify-content-xxl-center align-items-xxl-center" type="button" style="background: rgb(55,60,70);margin-top: 15px;color: white;margin-bottom: 15px;margin-right: 5px;margin-left: 5px;width: 35px;height: 35px;border-radius: 5px;text-align: center;border: 1px solid rgb(75,80,90);">
                    <i class="fa fa-folder-open" style="font-size: 20px;"></i>
                </button>
                <div class="card" style="margin-right: 5px;margin-left: 5px;width: 2px;background: rgb(55,60,70);height: 40px;"></div>
                <button class="btn btn-primary d-flex d-xxl-flex justify-content-center align-items-center align-content-center align-self-center justify-content-xxl-center align-items-xxl-center" type="button" style="background: rgb(55,60,70);margin-top: 15px;color: white;margin-bottom: 15px;margin-right: 5px;margin-left: 5px;width: 35px;height: 35px;border-radius: 5px;text-align: center;border: 1px solid rgb(75,80,90);">
                    <i class="fa fa-folder-open" style="font-size: 20px;"></i>
                </button>
                <button class="btn btn-primary d-flex d-xxl-flex justify-content-center align-items-center align-content-center align-self-center justify-content-xxl-center align-items-xxl-center" type="button" style="background: rgb(55,60,70);margin-top: 15px;color: white;margin-bottom: 15px;margin-right: 5px;margin-left: 5px;width: 35px;height: 35px;border-radius: 5px;text-align: center;border: 1px solid rgb(75,80,90);">
                    <i class="fa fa-folder-open" style="font-size: 20px;"></i>
                </button>
                <button class="btn btn-primary d-flex d-xxl-flex justify-content-center align-items-center align-content-center align-self-center justify-content-xxl-center align-items-xxl-center" type="button" style="background: rgb(55,60,70);margin-top: 15px;color: white;margin-bottom: 15px;margin-right: 5px;margin-left: 5px;width: 35px;height: 35px;border-radius: 5px;text-align: center;border: 1px solid rgb(75,80,90);">
                    <i class="fa fa-folder-open" style="font-size: 20px;"></i>
                </button>
                <button class="btn btn-primary d-flex d-xxl-flex justify-content-center align-items-center align-content-center align-self-center justify-content-xxl-center align-items-xxl-center" type="button" style="background: rgb(55,60,70);margin-top: 15px;color: white;margin-bottom: 15px;margin-right: 5px;margin-left: 5px;width: 35px;height: 35px;border-radius: 5px;text-align: center;border: 1px solid rgb(75,80,90);">
                    <small class="justify-content-center align-items-center align-content-center align-self-center" style="text-align: center;font-size: 20px;font-family: Bayon, sans-serif;">B</small>
                </button>
                <button class="btn btn-primary d-flex d-xxl-flex justify-content-center align-items-center align-content-center align-self-center justify-content-xxl-center align-items-xxl-center" type="button" style="background: rgb(55,60,70);margin-top: 15px;color: white;margin-bottom: 15px;margin-right: 5px;margin-left: 5px;width: 35px;height: 35px;border-radius: 5px;text-align: center;border: 1px solid rgb(75,80,90);">
                    <small class="justify-content-center align-items-center align-content-center align-self-center" style="text-align: center;font-size: 20px;height: 28px;font-family: Bayon, sans-serif;">S</small>
                </button>
                <button class="btn btn-primary d-flex d-xxl-flex justify-content-center align-items-center align-content-center align-self-center justify-content-xxl-center align-items-xxl-center" type="button" style="background: rgb(55,60,70);margin-top: 15px;color: white;margin-bottom: 15px;margin-right: 5px;margin-left: 5px;width: 35px;height: 35px;border-radius: 5px;text-align: center;border: 1px solid rgb(75,80,90);">
                    <small class="justify-content-center align-items-center align-content-center align-self-center" style="text-align: center;font-size: 20px;height: 28px;font-family: Bayon, sans-serif;">I</small>
                </button>
                <button class="btn btn-primary d-flex d-xxl-flex justify-content-center align-items-center align-content-center align-self-center justify-content-xxl-center align-items-xxl-center" type="button" style="background: rgb(55,60,70);margin-top: 15px;color: white;margin-bottom: 15px;margin-right: 5px;margin-left: 5px;width: 35px;height: 35px;border-radius: 5px;text-align: center;border: 1px solid rgb(75,80,90);">
                    <small class="justify-content-center align-items-center align-content-center align-self-center" style="text-align: center;font-size: 20px;height: 28px;font-family: Bayon, sans-serif;">L</small>
                </button>
                <button class="btn btn-primary d-flex d-xxl-flex justify-content-center align-items-center align-content-center align-self-center justify-content-xxl-center align-items-xxl-center" type="button" style="background: rgb(55,60,70);margin-top: 15px;color: white;margin-bottom: 15px;margin-right: 5px;margin-left: 5px;width: 35px;height: 35px;border-radius: 5px;text-align: center;border: 1px solid rgb(75,80,90);">
                    <small class="justify-content-center align-items-center align-content-center align-self-center" style="text-align: center;font-size: 20px;height: 28px;font-family: Bayon, sans-serif;">F</small>
                </button>
                <button class="btn btn-primary d-flex d-xxl-flex justify-content-center align-items-center align-content-center align-self-center justify-content-xxl-center align-items-xxl-center" type="button" style="background: rgb(55,60,70);margin-top: 15px;color: white;margin-bottom: 15px;margin-right: 5px;margin-left: 5px;width: 35px;height: 35px;border-radius: 5px;text-align: center;border: 1px solid rgb(75,80,90);">
                    <small class="justify-content-center align-items-center align-content-center align-self-center" style="text-align: center;font-size: 20px;height: 28px;font-family: Bayon, sans-serif;">D</small>
                </button>
                <button class="btn btn-primary d-flex d-xxl-flex justify-content-center align-items-center align-content-center align-self-center justify-content-xxl-center align-items-xxl-center" type="button" style="background: rgb(55,60,70);margin-top: 15px;color: white;margin-bottom: 15px;margin-right: 5px;margin-left: 5px;width: 35px;height: 35px;border-radius: 5px;text-align: center;border: 1px solid rgb(75,80,90);">
                    <small class="justify-content-center align-items-center align-content-center align-self-center" style="text-align: center;font-size: 20px;height: 28px;font-family: Bayon, sans-serif;">B[]</small>
                </button>
                <button class="btn btn-primary d-flex d-xxl-flex justify-content-center align-items-center align-content-center align-self-center justify-content-xxl-center align-items-xxl-center" type="button" style="background: rgb(55,60,70);margin-top: 15px;color: white;margin-bottom: 15px;margin-right: 5px;margin-left: 5px;width: 35px;height: 35px;border-radius: 5px;text-align: center;border: 1px solid rgb(75,80,90);">
                    <small class="justify-content-center align-items-center align-content-center align-self-center" style="text-align: center;font-size: 20px;height: 28px;font-family: Bayon, sans-serif;">I[]</small>
                </button>
                <button class="btn btn-primary d-flex d-xxl-flex justify-content-center align-items-center align-content-center align-self-center justify-content-xxl-center align-items-xxl-center" type="button" style="background: rgb(55,60,70);margin-top: 15px;color: white;margin-bottom: 15px;margin-right: 5px;margin-left: 5px;width: 35px;height: 35px;border-radius: 5px;text-align: center;border: 1px solid rgb(75,80,90);">
                    <small class="justify-content-center align-items-center align-content-center align-self-center" style="text-align: center;font-size: 20px;height: 28px;font-family: Bayon, sans-serif;">L[]</small>
                </button>
            </div>
            <div class="col-md-12"></div>
            <button class="btn btn-primary d-flex d-xxl-flex justify-content-center align-items-center align-content-center align-self-center justify-content-xxl-center align-items-xxl-center" type="button" style="background: rgb(55,60,70);margin-top: 15px;color: white;margin-bottom: 15px;margin-right: 5px;margin-left: 5px;width: 30px;height: 30px;border-radius: 5px;text-align: center;border: 1px solid rgb(75,80,90);">
                <i class="fa fa-folder-open" style="font-size: 18px;"></i>
            </button>
            <button class="btn btn-primary d-flex d-xxl-flex justify-content-center align-items-center align-content-center align-self-center justify-content-xxl-center align-items-xxl-center" type="button" style="background: rgb(55,60,70);margin-top: 15px;color: white;margin-bottom: 15px;margin-right: 5px;margin-left: 5px;width: 30px;height: 30px;border-radius: 5px;text-align: center;border: 1px solid rgb(75,80,90);">
                <img style="width: 20px;height: 20px;" src="../assets/img/PLATFORMS/3DS_Platform_Icon.svg"/>            
            </button>
        </>
    );
}