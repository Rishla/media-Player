import commonAPI from "./commonApi"
import SERVER_URL from "./Server-url"

// save video 
// save video api call by add.jsx
export  const addVideo=async(video)=>{
    // here allvideos is where we create i db.json
   return await commonAPI("POST",`${SERVER_URL}/allvideos`,video)

}

// get video
// get video api call by view.jsx
export const getAllVideo=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/allvideos`)
    
}

// api call for deleting video card
export const deleteVideo=async(videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allvideos/${videoId}`,{})
    
}


//  api call for watch history (API call used by video viewing components)
export const savehHistory = async (video) => {
    return await commonAPI("POST", `${SERVER_URL}/history`, video);
};

// api call for getting the video in watch history
export const getWatchHistory=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
    
}

// api call for deleting watch history
export const deleteHistory=async(videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${videoId}`,{})
    
}

// api call for add category
export const addCategory=async(categoryDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/category`,categoryDetails)
}

// api call for get category
export const getAllCategory=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/category`,"")
    
}