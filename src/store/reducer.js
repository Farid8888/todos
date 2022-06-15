
const initialState={
    problems:[
        {
            text: 'Тестовое задание',
            showIcon:false,
            id:1
        },
        {
            text:'Прекрасный код',
            showIcon:false,
            id:2
        },
        {
            text:'Покрытие тестами',
            showIcon:false,
            id:3
        },
      ],
      completedProblems:[],
      activeProblems:[
        {
            text: 'Тестовое задание',
            showIcon:false,
            id:1
        },
        {
            text:'Прекрасный код',
            showIcon:false,
            id:2
        },
        {
            text:'Покрытие тестами',
            showIcon:false,
            id:3
        },
      ],
      totalAmount:3
}

const Reducer =(state=initialState,action)=>{
switch(action.type){
case('SHOW_ICON'):
const ind = state.problems.findIndex(item=>item.id === action.id)
const newProbArr = [...state.problems]
const newItemPr = {...newProbArr[ind],showIcon:!newProbArr[ind].showIcon}
newProbArr[ind] = newItemPr
let newTotal
let newCompPr
let newActivePr
if(newItemPr.showIcon){
newTotal = state.totalAmount -1
newCompPr = state.completedProblems.concat(newProbArr[ind])
newActivePr = state.activeProblems.filter(pr=>pr.id !== action.id)
}else{
 newTotal=state.totalAmount +1 
 newCompPr = state.completedProblems.filter(item=>item.id !== action.id)
 newActivePr = state.activeProblems.concat(newProbArr[ind])
}
if(ind>=0){
    return {...state,problems:newProbArr,totalAmount:newTotal,completedProblems:newCompPr,activeProblems:newActivePr}
}
return state
case ('ADDPR'):
    const newProb = state.problems.concat(action.item)
    const newActProb = state.activeProblems.concat(action.item)
    const newTot = state.totalAmount + 1
    return {...state,problems:newProb,activeProblems:newActProb,totalAmount:newTot}
    case('REMOVE'):
    const newPr = state.problems.filter(prob=>prob.id !== action.id)
    const newActPr = state.activeProblems.filter(prob=>prob.id !==action.id)
    const newAmount = state.totalAmount - 1
    return {...state,problems:newPr,activeProblems:newActPr,totalAmount:newAmount}
case ('CLEAR'):
const arr =[]
state.problems.forEach(pr=>arr.push({...pr,showIcon:false}))
    return {...state,problems:arr,totalAmount:state.problems.length,completedProblems:[],activeProblems:state.problems}
default:return state
}
}

export default Reducer


