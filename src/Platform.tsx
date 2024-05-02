import "./Platform.css";

export interface PlatformProps {
  name: string;
  src: string;
  size: number;
}

export default function Platform(props: PlatformProps) {
  return (
      <button class="btn btn-primary Platform" type="button">
          <img class="justify-content-center align-items-center align-content-center align-self-center" style={`width: ${props.size}px;height: ${props.size}px;margin-right: 40px;margin-left: 40px;margin-bottom: 15px;`} src={props.src}/>
          &nbsp;{props.name}
      </button>
  );
}