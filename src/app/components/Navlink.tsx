

export function Navlink(props: any) {
    return (
       <div className=" bg-slate-400 py-1 px-2 mx-2 rounded-lg ">
          <a href={props.link}>{props.title}</a>
       </div>
    );
}