import './homeSreen.css';

function HomeSreen(){
    return(
        <div className="HomeScreen">
            <div style={{height:"100vh", backgroundColor:"black"}}>
                <div className='card category'>
                    <div>
                        <input type='radio' id='TaoTao' name="category"/>
                        <lable for='TaoTao'>TaoTao</lable>
                    </div>
                    <div>
                        <input type='radio' id='Alex'name="category"/>
                        <lable for='Alex'>Alex</lable>
                    </div>
                    <div>
                        <input type='radio' id='HSNU'name="category"/>
                        <lable for='HSNU'>HSNU</lable>
                    </div>
                    <div>
                        <input type='radio' id='1420'name="category"/>
                        <lable for='1420'>1420</lable>
                    </div>
                </div>
                <div className='card sorting'>
                    <div>
                        <input type='radio' id='bubbleSort'name="sorting"/>
                        <lable for='bubbleSort'>bubbleSort</lable>
                    </div>
                    <div>
                        <input type='radio' id='mergeSort'name="sorting"/>
                        <lable for='mergeSort'>mergeSort</lable>
                    </div>
                    <div>
                        <input type='radio' id='selectionSort'name="sorting"/>
                        <lable for='selectionSort'>selectionSort</lable>
                    </div>
                    <div>
                        <input type='radio' id='insertionSort'name="sorting"/>
                        <lable for='insertionSort'>insertionSort</lable>
                    </div>
                </div>
                <div className='card sizeslider'>
                    <input type='range' min="10" max="100" value="55"
                    class="sizeSlider" id="sizeRange"/>
                    <p id="demo"></p>
                </div>
                <button title="Sorting" className="sortingButtom" id="sortingButtom" 
                style={{backgroundColor:'grey',color:'white',padding:'15px',borderRadius:'10px'}}>
                    Sorting
                </button>
            </div>
        </div>
    )
}


export default HomeSreen;